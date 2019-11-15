using System;
using System.Text;
using HomeApplianceStore.API.Utils;
using HomeApplianceStore.Database;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace HomeApplianceStore.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;

            var host = BuildWebHost(args);

            try
            {
                host.MigrateDatabase<DatabaseContext>();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
  
            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}