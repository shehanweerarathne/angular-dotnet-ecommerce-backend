using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ecommerce_Backend.Migrations
{
    public partial class initiall : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PaymentIntentId",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PaymentIntentId",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8b09e4a6-5182-4558-85b0-bedc94cb231a"),
                column: "ConcurrencyStamp",
                value: "5523bf17-64a2-47ff-b70f-1c7eeaa77bf1");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8d1bd94a-c96d-446b-9549-5f4bc069a779"),
                column: "ConcurrencyStamp",
                value: "75757df3-08d9-4681-b7a0-1d58df857cbe");
        }
    }
}
