namespace Catan.PlayerSelect;

public class PlayerNumber {
    private static PlayerNumber _instance = new PlayerNumber();
    private static int Players { get; set; }
    private PlayerNumber() {
    }
    public static PlayerNumber GetInstance()
    {
        return _instance;
    }

    public static int GetPlayers() {
        return Players;
    }

    public static void SetPlayers(int players) {
        Players = players;
    }
}