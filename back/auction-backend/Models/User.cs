namespace auction_backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNo { get; set; }
        public string UserType { get; set; }
        public string Address { get; set; }
        public bool IsAdmin { get; set; } = false;
    }
}
