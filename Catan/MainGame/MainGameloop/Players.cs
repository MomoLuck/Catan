using System.ComponentModel.DataAnnotations;
using Catan.MainGame.Figures;

namespace Catan.MainGame.MainGameloop;

public static class Players {
    public static List<Player> PlayerList { get; set; } = new List<Player>();
    
}