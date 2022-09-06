﻿using System.ComponentModel.DataAnnotations;

namespace Ecommerce_Backend.DTOs;

public class CreateProductDto
{
    [Required]
    public string Name { get; set; }
    public string Description { get; set; }
    [Required]
    [Range(1,Double.PositiveInfinity)]
    public long Price { get; set; }
    public IFormFile PictureUrl { get; set; }
    public string Type { get; set; }
    public string Brand { get; set; }
    [Required]
    [Range(1,500)]
    public int QuantityInStock { get; set; }
}