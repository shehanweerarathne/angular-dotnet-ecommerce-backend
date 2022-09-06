using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ecommerce_Backend.Migrations
{
    public partial class publuid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PublicId",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8b09e4a6-5182-4558-85b0-bedc94cb231a"),
                column: "ConcurrencyStamp",
                value: "bef5863d-3b8c-4e24-b9a9-c9d8d6d50cc6");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8d1bd94a-c96d-446b-9549-5f4bc069a779"),
                column: "ConcurrencyStamp",
                value: "82a40115-2441-4730-abf0-df5acd349166");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublicId",
                table: "Products");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8b09e4a6-5182-4558-85b0-bedc94cb231a"),
                column: "ConcurrencyStamp",
                value: "3cb47cc6-b50b-4a14-aa40-64d82a808783");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8d1bd94a-c96d-446b-9549-5f4bc069a779"),
                column: "ConcurrencyStamp",
                value: "b739f8c7-4834-4dc0-9e6e-c5ad47aadb3b");
        }
    }
}
