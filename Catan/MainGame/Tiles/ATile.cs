using Catan.MainGame;

namespace Catan;

public abstract class ATile{
    public ETileTypes Type { get; init; }
    public ERessource Ressource{ get; init; }
    public string ImageUrl { get; init; }
    public string Id { get; set; }
    public ATile(ETileTypes type, ERessource ressource, string imageUrl)
    {
        Type = type;
        Ressource = ressource;
        ImageUrl = imageUrl;
    }

    public abstract void GiveRessource();
}
