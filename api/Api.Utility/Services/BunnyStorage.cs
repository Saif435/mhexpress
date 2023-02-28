using API.Utility.Services.Interfaces;
using BunnyCDN.Net.Storage;
using Microsoft.Extensions.Configuration;

namespace API.Utility.Services
{
    public class BunnyStorage : IBunnyStorage
    {
        private readonly IConfiguration _config;
        private readonly string _zoneName;
        private readonly string _accessKey;
        private readonly string _zoneRegion;

        public BunnyStorage(IConfiguration config)
        {
            _config = config;
            _zoneName = _config["BunnyStorage:ZoneName"];
            _accessKey = _config["BunnyStorage:AccessKey"];
            _zoneRegion = _config["BunnyStorage:ZoneRegion"];
        }

        public async Task<bool> Delete(string fileName)
        {
            var bunnyCDNStorage = new BunnyCDNStorage(_zoneName, _accessKey, _zoneRegion);

            if (fileName != null)
            {
                await bunnyCDNStorage.DeleteObjectAsync("/" + _zoneName + "/" + fileName);
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task Upload(string fileName, Stream fileContent)
        {
            var bunnyCDNStorage = new BunnyCDNStorage(_zoneName, _accessKey, _zoneRegion);
            await bunnyCDNStorage.UploadAsync(fileContent, "/" + _zoneName + "/" + fileName);
        }
    }
}
