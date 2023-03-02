using AutoMapper;
using MovieFinder.Domain.Entities;
using MovieFinder.Shared.DTOs;

namespace MovieFinder.Application.Profiles;
public class MoviesMappingProfile : Profile
{
    public MoviesMappingProfile()
    {
        CreateMap<MostPopularDataDetail, MovieDto>()
           .ForMember(m => m.Description, opt => opt.MapFrom(mp => mp.FullTitle));
        CreateMap<Movie, MovieDto>().ReverseMap();
        CreateMap<Actor, ActorDto>().ReverseMap();
    }
}
