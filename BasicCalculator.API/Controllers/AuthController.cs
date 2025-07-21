using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BasicCalculator.API.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;


[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly IConfiguration _config;
    // private readonly TokenService _tokenService;

    public AuthController(UserManager<IdentityUser> userManager, IConfiguration config, SignInManager<IdentityUser> signInManager)
    {
        _userManager = userManager;
        _config = config;
        _signInManager = signInManager;
        // _tokenService = tokenService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        var user = new IdentityUser
        {
            UserName = dto.Email,
            Email = dto.Email,
        };

        var result = await _userManager.CreateAsync(user, dto.Password);
        if (!result.Succeeded)
            return BadRequest(result.Errors);
        return Ok("user created successfuly");
    }
    
        [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
    {
        var user = await _userManager.FindByEmailAsync(loginDto.Email);
        if (user == null)
            return Unauthorized("Invalid email or password.");

        var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
        if (!result.Succeeded)
            return Unauthorized("Invalid email or password.");

        var token = GenerateJwtToken(user);
        return Ok(new { token });
    }

    // [HttpPost("login")]
    // public async Task<IActionResult> Login([FromBody] LoginDto dto)
    // {
    //     var user = await _userManager.FindByEmailAsync(dto.Email);
    //     if (user == null || !await _userManager.CheckPasswordAsync(user, dto.Password))
    //         return Unauthorized("invalid credential");

    //     var token = GenerateJwtToken(user);
    //     return Ok(new { token });
    // }

        private string GenerateJwtToken(IdentityUser user)
    {
        var issuer = _config["Jwt:Issuer"]!;
        var audience = _config["Jwt:Audience"]!;
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Email!),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(JwtRegisteredClaimNames.Iss, issuer),
            new Claim(JwtRegisteredClaimNames.Aud, audience)
        };

        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            expires: DateTime.UtcNow.AddHours(2),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }



    [Authorize]
    [HttpGet("secured-data")]
    public string GetData()
    {
        return "secured data";
    }



}