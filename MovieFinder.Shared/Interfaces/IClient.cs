namespace MovieFinder.Shared.Interfaces;
public interface IClient
{
    HttpClient Client { get; }
    string Key { get; }
}
