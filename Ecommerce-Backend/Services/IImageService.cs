using CloudinaryDotNet.Actions;

namespace Ecommerce_Backend.Services;

public interface IImageService
{
    Task<ImageUploadResult> AddImageAsync(IFormFile file);
    Task<DeletionResult> DeleteImageAsync(string publicId);
}