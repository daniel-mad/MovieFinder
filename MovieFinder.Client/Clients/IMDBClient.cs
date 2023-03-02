using Microsoft.Extensions.Configuration;
using MovieFinder.Shared.Interfaces;

namespace MovieFinder.Client.Clients;
public class IMDBClient : IClient
{
    public IMDBClient(HttpClient client, IConfiguration configuration)
    {
        Key = configuration["IMDB-API:Key"];
        client.BaseAddress = new Uri(configuration["IMDB-API:Url"]);
        Client = client;
    }

    public HttpClient Client { get; }
    public string Key { get; }
}
