namespace Catan.MainGame.Cards;

public class ACards {
    public ECards Id {get;set;}
    public bool IsPrivate {get;set;}
    public bool IsSpecial {get;init;}
    public bool IsDevelopment {get;init;}

    public ACards(ECards id, bool isPrivate, bool isSpecial, bool isDevelopment) {
        Id = id;
        IsPrivate = isPrivate;
        IsSpecial = isSpecial;
        IsDevelopment = isDevelopment;
    }
}