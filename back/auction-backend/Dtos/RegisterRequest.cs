namespace auction_backend.Dtos
{
    public class RegisterRequest
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNo { get; set; }
        public string UserType { get; set; }
        public string Address { get; set; }
    }
}
