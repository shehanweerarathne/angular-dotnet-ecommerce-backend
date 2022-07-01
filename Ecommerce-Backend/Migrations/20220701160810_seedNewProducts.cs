using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ecommerce_Backend.Migrations
{
    public partial class seedNewProducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("3c0fda3e-a65d-4199-89ba-417ef346ab6c"));

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Brand", "Description", "Name", "PictureUrl", "Price", "QuantityInStock", "Type" },
                values: new object[,]
                {
                    { new Guid("0d2defd6-c2ee-45c0-89c2-47681f16f05a"), "VS Code", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Green Code Gloves", "/images/products/glove-code2.png", 1500L, 100, "Gloves" },
                    { new Guid("162b5f03-6269-4b6b-8272-9c998fd302d9"), "NetCore", "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.", "Core Purple Boots", "/images/products/boot-core1.png", 19999L, 100, "Boots" },
                    { new Guid("1f747416-6145-4b8f-a7cc-192690540a24"), "Angular", "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.", "Angular Purple Boots", "/images/products/boot-ang2.png", 15000L, 100, "Boots" },
                    { new Guid("2412bde0-cdcb-47cf-b7b0-cf42f009ccb2"), "React", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Purple React Woolen Hat", "/images/products/hat-react2.png", 1500L, 100, "Hats" },
                    { new Guid("2577eb86-a054-4ccc-a4bf-624ea48eadce"), "TypeScript", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Typescript Entry Board", "/images/products/sb-ts1.png", 12000L, 100, "Boards" },
                    { new Guid("319ed0e4-82df-4f19-9b26-4e8fe1d69965"), "React", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Purple React Gloves", "/images/products/glove-react1.png", 1600L, 100, "Gloves" },
                    { new Guid("46f04a5d-2f52-485e-8394-b8e53c783d4c"), "Angular", "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.", "Angular Blue Boots", "/images/products/boot-ang1.png", 18000L, 100, "Boots" },
                    { new Guid("55e19c03-88fb-4a1e-bc70-be5da045aef0"), "VS Code", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Blue Code Gloves", "/images/products/glove-code1.png", 1800L, 100, "Gloves" },
                    { new Guid("58f150d6-962f-4364-bb91-dc222534c2e1"), "Redis", "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.", "Redis Red Boots", "/images/products/boot-redis1.png", 25000L, 100, "Boots" },
                    { new Guid("88499075-ffa8-416b-8340-70e4224dadac"), "React", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Green React Gloves", "/images/products/glove-react2.png", 1400L, 100, "Gloves" },
                    { new Guid("8c478a3c-4f01-4b27-8292-2c8d72d1d5bc"), "NetCore", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Core Red Boots", "/images/products/boot-core2.png", 18999L, 100, "Boots" },
                    { new Guid("94dfa068-854f-4f1c-b553-ca4b093d8b6f"), "React", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "React Board Super Whizzy Fast", "/images/products/sb-react1.png", 25000L, 100, "Boards" },
                    { new Guid("bc2adbc0-4aa7-4858-b0f5-6d08c95f907a"), "React", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Green React Woolen Hat", "/images/products/hat-react1.png", 8000L, 100, "Hats" },
                    { new Guid("c5398f19-e2c6-446d-8e4c-7fb169a7f27e"), "NetCore", "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.", "Net Core Super Board", "/images/products/sb-core2.png", 30000L, 100, "Boards" },
                    { new Guid("c89091c0-729a-4bcb-ad35-696be17aca46"), "NetCore", "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.", "Core Board Speed Rush 3", "/images/products/sb-core1.png", 18000L, 100, "Boards" },
                    { new Guid("eff9d5d1-d050-4221-bf9c-33e47ea79ad7"), "Angular", "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.", "Green Angular Board 3000", "/images/products/sb-ang2.png", 15000L, 100, "Boards" },
                    { new Guid("efffcfcc-37d8-4ccc-9375-4a5a3ba41d2b"), "NetCore", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Core Blue Hat", "/images/products/hat-core1.png", 1000L, 100, "Hats" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("0d2defd6-c2ee-45c0-89c2-47681f16f05a"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("162b5f03-6269-4b6b-8272-9c998fd302d9"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("1f747416-6145-4b8f-a7cc-192690540a24"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("2412bde0-cdcb-47cf-b7b0-cf42f009ccb2"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("2577eb86-a054-4ccc-a4bf-624ea48eadce"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("319ed0e4-82df-4f19-9b26-4e8fe1d69965"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("46f04a5d-2f52-485e-8394-b8e53c783d4c"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("55e19c03-88fb-4a1e-bc70-be5da045aef0"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("58f150d6-962f-4364-bb91-dc222534c2e1"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("88499075-ffa8-416b-8340-70e4224dadac"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("8c478a3c-4f01-4b27-8292-2c8d72d1d5bc"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("94dfa068-854f-4f1c-b553-ca4b093d8b6f"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("bc2adbc0-4aa7-4858-b0f5-6d08c95f907a"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("c5398f19-e2c6-446d-8e4c-7fb169a7f27e"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("c89091c0-729a-4bcb-ad35-696be17aca46"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("eff9d5d1-d050-4221-bf9c-33e47ea79ad7"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("efffcfcc-37d8-4ccc-9375-4a5a3ba41d2b"));

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Brand", "Description", "Name", "PictureUrl", "Price", "QuantityInStock", "Type" },
                values: new object[] { new Guid("3c0fda3e-a65d-4199-89ba-417ef346ab6c"), "Angular", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Angular Speedster Board 2000", "/images/products/sb-ang1.png", 20000L, 100, "Boards" });
        }
    }
}
