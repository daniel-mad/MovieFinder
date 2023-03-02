using MovieFinder.Domain.Exceptions;
using MovieFinder.Domain;
using System.Net;

namespace MovieFinder.API.Middleware;

public class ErrorsHandlerMiddleware
{
    private readonly RequestDelegate _next;

    public ErrorsHandlerMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {

            await HandleExceptionAsync(context, ex);
        }
    }

    private Task HandleExceptionAsync(HttpContext context, Exception ex)
    {
        context.Response.ContentType = "application/json";
        var result = ex switch
        {
            NotFoundException notFoundException => new ErrorDetails { StatusCode = (int)HttpStatusCode.NotFound, Message = ex.Message },
            _ => new ErrorDetails { StatusCode = (int)HttpStatusCode.InternalServerError, Message = "Something went wronge." }
        };
        context.Response.StatusCode = result.StatusCode;
        return context.Response.WriteAsync(result.ToString());
    }
}
