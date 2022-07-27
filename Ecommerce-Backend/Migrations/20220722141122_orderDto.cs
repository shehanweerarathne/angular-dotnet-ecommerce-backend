using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ecommerce_Backend.Migrations
{
    public partial class orderDto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8b09e4a6-5182-4558-85b0-bedc94cb231a"),
                column: "ConcurrencyStamp",
                value: "f2b5129f-a634-4a7f-9af0-da42b3e4058c");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8d1bd94a-c96d-446b-9549-5f4bc069a779"),
                column: "ConcurrencyStamp",
                value: "e942014f-3323-43ac-afb5-a7b735488a33");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8b09e4a6-5182-4558-85b0-bedc94cb231a"),
                column: "ConcurrencyStamp",
                value: "5ec0f536-9e29-4c84-bda5-22a2bc4019cf");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8d1bd94a-c96d-446b-9549-5f4bc069a779"),
                column: "ConcurrencyStamp",
                value: "f0edd661-77ca-4886-9c00-93a0e9bc220f");
        }
    }
}
