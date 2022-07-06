using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ecommerce_Backend.Migrations
{
    public partial class seedproductss : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Baskets",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BuyerId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Baskets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<long>(type: "bigint", nullable: false),
                    PictureUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    QuantityInStock = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BasketItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    ProductId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BasketId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BasketItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BasketItems_Baskets_BasketId",
                        column: x => x.BasketId,
                        principalTable: "Baskets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BasketItems_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Brand", "Description", "Name", "PictureUrl", "Price", "QuantityInStock", "Type" },
                values: new object[,]
                {
                    { new Guid("0dea6451-33d9-41fb-baad-51c71f6d306d"), "React", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Green React Woolen Hat", "/images/products/hat-react1.png", 8000L, 100, "Hats" },
                    { new Guid("0fd52d3c-dedb-46d3-903f-163bb0a65cea"), "TypeScript", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Typescript Entry Board", "/images/products/sb-ts1.png", 12000L, 100, "Boards" },
                    { new Guid("21657799-731c-4f92-8db1-4553329b3d4b"), "Angular", "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.", "Angular Blue Boots", "/images/products/boot-ang1.png", 18000L, 100, "Boots" },
                    { new Guid("284d67e9-96d0-4db3-9e3c-04f1d21a1041"), "NetCore", "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.", "Net Core Super Board", "/images/products/sb-core2.png", 30000L, 100, "Boards" },
                    { new Guid("429d717c-dfac-4de9-8606-efa30930a590"), "NetCore", "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.", "Core Purple Boots", "/images/products/boot-core1.png", 19999L, 100, "Boots" },
                    { new Guid("4cb5ace1-2bd6-455d-ae9c-4f55849cfa92"), "React", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Purple React Woolen Hat", "/images/products/hat-react2.png", 1500L, 100, "Hats" },
                    { new Guid("5b4724ed-ff5f-4c6a-8aea-754023082fd4"), "VS Code", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Blue Code Gloves", "/images/products/glove-code1.png", 1800L, 100, "Gloves" },
                    { new Guid("6ae6a2ef-59dc-4367-b857-2eb76b7ee0dc"), "VS Code", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Green Code Gloves", "/images/products/glove-code2.png", 1500L, 100, "Gloves" },
                    { new Guid("6becd2b6-8c61-40b7-9059-5ba2e5b2842e"), "NetCore", "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.", "Core Board Speed Rush 3", "/images/products/sb-core1.png", 18000L, 100, "Boards" },
                    { new Guid("88e43579-145f-4229-8090-2630d9f66add"), "Angular", "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.", "Green Angular Board 3000", "/images/products/sb-ang2.png", 15000L, 100, "Boards" },
                    { new Guid("8c6acbbd-d15d-4f69-b8d9-1b8315391946"), "React", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Green React Gloves", "/images/products/glove-react2.png", 1400L, 100, "Gloves" },
                    { new Guid("912f4b2c-15c7-42ca-b7c0-c91f081ec938"), "Redis", "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.", "Redis Red Boots", "/images/products/boot-redis1.png", 25000L, 100, "Boots" },
                    { new Guid("97ec7205-7a07-42df-aef0-20c8b851819c"), "React", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "React Board Super Whizzy Fast", "/images/products/sb-react1.png", 25000L, 100, "Boards" },
                    { new Guid("a160b9bd-013f-4425-a22d-a0d4fd2df653"), "NetCore", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Core Red Boots", "/images/products/boot-core2.png", 18999L, 100, "Boots" },
                    { new Guid("b2d1ef62-706f-423a-aad1-8b3a35ad09f2"), "React", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Purple React Gloves", "/images/products/glove-react1.png", 1600L, 100, "Gloves" },
                    { new Guid("dcac678f-fa21-418f-8ea3-df2bad0ba5ac"), "Angular", "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.", "Angular Purple Boots", "/images/products/boot-ang2.png", 15000L, 100, "Boots" },
                    { new Guid("e709f1ab-85a4-4e64-a374-d0f2ae53171c"), "NetCore", "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.", "Core Blue Hat", "/images/products/hat-core1.png", 1000L, 100, "Hats" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_BasketId",
                table: "BasketItems",
                column: "BasketId");

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_ProductId",
                table: "BasketItems",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BasketItems");

            migrationBuilder.DropTable(
                name: "Baskets");

            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
