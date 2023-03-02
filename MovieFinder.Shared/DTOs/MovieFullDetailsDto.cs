namespace MovieFinder.Shared.DTOs;
public class MovieFullDetailsDto : MovieDto
{
    private string _fullTitle;
    public string? FullTitle
    {
        get => _fullTitle;
        set
        {
            if (value is not null)
            {
                Description = value;
                _fullTitle = value;
            }
        }
    }
    public string? Year { set; get; }
    public string? Plot { set; get; }
    public List<ActorDto> ActorList { get; set; }
    public string? Genres { get; set; }
}
