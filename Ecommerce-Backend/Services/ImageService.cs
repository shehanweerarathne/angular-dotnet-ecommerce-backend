using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace Ecommerce_Backend.Services;

public class ImageService : IImageService
{
    private readonly IConfiguration _configuration;
    private readonly Cloudinary _cloudinary;

    public ImageService(IConfiguration configuration)
    {
        var acc = new Account
        (
            configuration["Cloudinary:CloudName"],
            configuration["Cloudinary:ApiKey"],
            configuration["Cloudinary:ApiSecret"]
        );
        _cloudinary = new Cloudinary(acc);
    }

    public async Task<ImageUploadResult> AddImageAsync(IFormFile file)
    {
        var uploadResault = new ImageUploadResult();
        if (file.Length > 0)
        {
            using var stream = file.OpenReadStream();
            var uploadParams = new ImageUploadParams
            {
                File = new FileDescription(file.FileName, stream)
            };
            uploadResault = await _cloudinary.UploadAsync(uploadParams);
        }

        return uploadResault;
    }

    public async Task<DeletionResult> DeleteImageAsync(string publicId)
    {
        var deleteParams = new DeletionParams(publicId);
        var result = await _cloudinary.DestroyAsync(deleteParams);
        return result;
    }
}