using Microsoft.Extensions.DependencyInjection;
using MovieFinder.Application.Services;
using MovieFinder.Client.Clients;
using MovieFinder.Shared.Interfaces;
using System.Reflection;

namespace MovieFinder.Application;
public static class ConfigureServices
{
    public static IServiceCollection ConfigureApplication(this IServiceCollection services)
    {
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        services.AddHttpClient<IClient, IMDBClient>();
        services.AddTransient<IMovieService, MovieService>();
        return services;
    }
}
