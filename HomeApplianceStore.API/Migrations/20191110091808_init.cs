using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HomeApplianceStore.API.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Guid = table.Column<Guid>(nullable: false),
                    FullName = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Guid);
                });

            migrationBuilder.CreateTable(
                name: "SpecificationValues",
                columns: table => new
                {
                    Guid = table.Column<Guid>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpecificationValues", x => x.Guid);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Guid = table.Column<Guid>(nullable: false),
                    DateTimeOrder = table.Column<DateTime>(nullable: false),
                    ClientGuid = table.Column<Guid>(nullable: true),
                    TotalCost = table.Column<int>(nullable: false),
                    DeliveryTerms = table.Column<string>(nullable: true),
                    CurrentStatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Guid);
                    table.ForeignKey(
                        name: "FK_Orders_Clients_ClientGuid",
                        column: x => x.ClientGuid,
                        principalTable: "Clients",
                        principalColumn: "Guid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Goods",
                columns: table => new
                {
                    Guid = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Price = table.Column<int>(nullable: false),
                    Manufacturer = table.Column<string>(nullable: true),
                    AssemblyPlace = table.Column<string>(nullable: true),
                    Availability = table.Column<bool>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    OrderGuid = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Goods", x => x.Guid);
                    table.ForeignKey(
                        name: "FK_Goods_Orders_OrderGuid",
                        column: x => x.OrderGuid,
                        principalTable: "Orders",
                        principalColumn: "Guid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Specifications",
                columns: table => new
                {
                    Guid = table.Column<Guid>(nullable: false),
                    SpecificationName = table.Column<string>(nullable: true),
                    ValueGuid = table.Column<Guid>(nullable: false),
                    GoodsGuid = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Specifications", x => x.Guid);
                    table.ForeignKey(
                        name: "FK_Specifications_Goods_GoodsGuid",
                        column: x => x.GoodsGuid,
                        principalTable: "Goods",
                        principalColumn: "Guid",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Specifications_SpecificationValues_ValueGuid",
                        column: x => x.ValueGuid,
                        principalTable: "SpecificationValues",
                        principalColumn: "Guid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Goods_OrderGuid",
                table: "Goods",
                column: "OrderGuid");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ClientGuid",
                table: "Orders",
                column: "ClientGuid");

            migrationBuilder.CreateIndex(
                name: "IX_Specifications_GoodsGuid",
                table: "Specifications",
                column: "GoodsGuid");

            migrationBuilder.CreateIndex(
                name: "IX_Specifications_ValueGuid",
                table: "Specifications",
                column: "ValueGuid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Specifications");

            migrationBuilder.DropTable(
                name: "Goods");

            migrationBuilder.DropTable(
                name: "SpecificationValues");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Clients");
        }
    }
}
