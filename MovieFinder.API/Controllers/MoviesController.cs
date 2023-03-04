using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieFinder.Shared.DTOs;
using MovieFinder.Shared.Interfaces;

namespace MovieFinder.API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class MoviesController : ControllerBase
{
    private readonly IMovieService _service;

    public MoviesController(IMovieService service)
    {
        _service = service;
    }
    [HttpGet("PopularMovies")]
    [ResponseCache(Duration = 60 * 60 * 6)]
    public async Task<ActionResult<IEnumerable<MovieDto>>> GetMostPopularMovies()
    {
        var movies = await _service.GetMostPopularMovies();
        return Ok(movies);
    }

    [HttpGet("SearchMovie/{expression}")]
    public async Task<ActionResult<IEnumerable<MovieDto>>> GetMoviesByName(string expression)
    {
        var movies = await _service.GetMoviesByName(expression);
        return Ok(movies);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<MovieFullDetailsDto>> GetMovie(string id)
    {
        var movies = await _service.GetMovieInformation(id);
        return Ok(movies);
    }
}
