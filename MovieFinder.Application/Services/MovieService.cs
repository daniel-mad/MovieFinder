using AutoMapper;
using MovieFinder.Domain.Entities;
using MovieFinder.Domain.Exceptions;
using MovieFinder.Shared.DTOs;
using MovieFinder.Shared.Interfaces;
using System.Net.Http.Json;

namespace MovieFinder.Application.Services;
public class MovieService : IMovieService
{
    private readonly HttpClient _client;
    private readonly string _apiKey;
    private readonly IMapper _mapper;

    public MovieService(IClient client, IMapper mapper)
    {
        _client = client.Client;
        _apiKey = client.Key;
        _mapper = mapper;
    }

    public async Task<IEnumerable<MovieDto>> GetMostPopularMovies()
    {
        var moviesFromApi = await _client.GetFromJsonAsync<MostPopularData>($"/API/MostPopularMovies/{_apiKey}");

        var movies = _mapper.Map<IEnumerable<MovieDto>>(moviesFromApi!.Items);
        return movies;

    }

    public async Task<IEnumerable<MovieDto>> GetMoviesByName(string expression)
    {
        var moviesSearchData = await _client.GetFromJsonAsync<SearchData>($"/API/AdvancedSearch/{_apiKey}?title={expression}");
        var moviesDto = _mapper.Map<IEnumerable<MovieDto>>(moviesSearchData.Results);
        return moviesDto;
    }

    public async Task<MovieFullDetailsDto> GetMovieInformation(string movieId)
    {
        var movie = await _client.GetFromJsonAsync<MovieFullDetailsDto>($"/API/Title/{_apiKey}/{movieId}");
        if (movie is null || string.IsNullOrEmpty(movie.Id))
        {
            throw new NotFoundException($"Movie with id {movieId} is not found.");
        }
        return movie;

    }
}
