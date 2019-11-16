using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using HomeApplianceStore.Database;
using HomeApplianceStore.Domain;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace HomeApplianceStore.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDomain();
            
            services.AddEntityFrameworkNpgsql().AddDbContext<DatabaseContext>(options =>
                options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly("HomeApplianceStore.API")));
            
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                    {Title = "HomeApplianceStore", Version = "v1"});
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "HomeApplianceStore V1");
            });
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}