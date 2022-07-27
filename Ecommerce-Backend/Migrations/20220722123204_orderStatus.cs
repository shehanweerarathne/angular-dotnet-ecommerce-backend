using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ecommerce_Backend.Migrations
{
    public partial class orderStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Orders",
                newName: "OrderStatus");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "OrderStatus",
                table: "Orders",
                newName: "Type");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8b09e4a6-5182-4558-85b0-bedc94cb231a"),
                column: "ConcurrencyStamp",
                value: "afd5d89e-965f-4146-b5fa-14601e7a697c");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8d1bd94a-c96d-446b-9549-5f4bc069a779"),
                column: "ConcurrencyStamp",
                value: "914c391e-005f-4eb6-8a49-f9ec72d0d61f");
        }
    }
}
