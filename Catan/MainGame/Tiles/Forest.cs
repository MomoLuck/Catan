namespace Catan.MainGame;

public class Forest : ATile {
    public Forest() : base(ETileTypes.Forest, ERessource.Wood, """'./img/Wood.png'""")
    {
        
    }
    

    public override void GiveRessource(){
        throw new NotImplementedException();
    }
}