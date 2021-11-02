using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ExampleWebAPI.Controllers
{
    public class UserProfile
    {
        public string UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }

        public string UserPassword { get; set; }
        public string DateOfBirth { get; set; }
        public string CommunicationAddress { get; set; }
        public string EmailId { get; set; }
        public string MobileNumber { get; set; }
        public string Interests { get; set; }
    }


    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public string ConnectionString; 
        public UserController()
        {
            ConnectionString = "Data Source = LAPTOP-QP79NHVA\\SQLEXPRESS; Initial Catalog = DotNet; " + "Integrated Security = true";
        }

        [Route("GetUserProfile")]
        [HttpGet]
        public IActionResult GetUserProfile()
        {
            List<UserProfile> myUserProfile = new List<UserProfile>();
            try
            {
                
                using (SqlConnection conn = new SqlConnection(ConnectionString))
                {
                    conn.Open();
                    SqlCommand command = new SqlCommand("select * from UserProfile", conn);
                    SqlDataReader reader = command.ExecuteReader();
                    int nCount = 0;
                    while (reader.Read())
                    {

                        UserProfile up = new UserProfile();
                        up.UserId = reader["UserId"].ToString();
                        up.UserFirstName = reader["UserFirstName"].ToString();
                        up.UserLastName = reader["UserLastName"].ToString();
                        up.UserPassword = reader["UserPassword"].ToString();
                        up.DateOfBirth = reader["DateOfBirth"].ToString();
                        up.CommunicationAddress = reader["CommunicationAddress"].ToString();
                        up.EmailId = reader["EmailId"].ToString();
                        up.MobileNumber = reader["MobileNumber"].ToString();
                        up.Interests = reader["Interests"].ToString();


                        nCount++;
                        myUserProfile.Add(up);

                    }
                    conn.Close();

                }
            }

            catch (Exception ex)
            {
                Console.WriteLine("Hi... There is an exception:. " + ex.Message);
            }
            return Ok(myUserProfile);
        }

        [Route("ValidateUserProfile")]
        [HttpPost]
        public IActionResult ValidateUserProfile([FromBody]UserProfile myUserProfile)
        {
            try
            {
                //string ConnectionString = "Data Source = LAPTOP-QP79NHVA\\SQLEXPRESS; Initial Catalog = DotNet; " + "Integrated Security = true";
                using (SqlConnection conn = new SqlConnection(ConnectionString))
                {
                    conn.Open();

                    string commandText = $"SELECT UserId FROM UserProfile WHERE UserId='{myUserProfile.UserId}' and UserPassword='{myUserProfile.UserPassword}'";

                    SqlCommand command = new SqlCommand(commandText, conn);
                    SqlDataReader reader = command.ExecuteReader();
                    int nCount = 0;
                    while (reader.Read())
                    {
                        nCount++;
                    }

                    if(nCount <= 0)
                    {
                        return BadRequest();
                    }

                        //for (int i = 0; i < myUserProfile.Count; i++)
                        //{
                        //    string commandText = $"INSERT INTO UserProfile VALUES('{myUserProfile[i].UserId}','{myUserProfile[i].UserFirstName}', '{myUserProfile[i].UserLastName}', '{myUserProfile[i].UserPassword}', '{myUserProfile[i].DateOfBirth}','{myUserProfile[i].CommunicationAddress}','{myUserProfile[i].EmailId}','{myUserProfile[i].MobileNumber}','{myUserProfile[i].Interests}')";
                        //    SqlCommand command = new SqlCommand(commandText, conn);

                        //    command.ExecuteNonQuery();

                        //    recordsInserted++;
                        //}
                        conn.Close();



                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
            return Ok();

        }
        //PostMethod

        [Route("InsertUserProfile")]
        [HttpPost]
        public IActionResult InsertUserProfile([FromBody] List<UserProfile> myUserProfile)
        {
            try
            {
                //string ConnectionString = "Data Source = LAPTOP-QP79NHVA\\SQLEXPRESS; Initial Catalog = DotNet; " + "Integrated Security = true";
                using (SqlConnection conn = new SqlConnection(ConnectionString))
                {
                    conn.Open();
                    int recordsInserted = 0;
                    for (int i = 0; i < myUserProfile.Count; i++)
                    {
                        string commandText = $"INSERT INTO UserProfile VALUES('{myUserProfile[i].UserId}','{myUserProfile[i].UserFirstName}', '{myUserProfile[i].UserLastName}', '{myUserProfile[i].UserPassword}', '{myUserProfile[i].DateOfBirth}','{myUserProfile[i].CommunicationAddress}','{myUserProfile[i].EmailId}','{myUserProfile[i].MobileNumber}','{myUserProfile[i].Interests}')";
                        SqlCommand command = new SqlCommand(commandText, conn);

                        command.ExecuteNonQuery();

                        recordsInserted++;
                    }
                    conn.Close();



                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
            return Ok();

        }



        //p

        [Route("UpdateUserProfile")]
        [HttpPut]
        public IActionResult UpdateUserProfile([FromBody] List<UserProfile> myUserProfile)
        {
            try
            {
                //string ConnectionString = "Data Source = LAPTOP-QP79NHVA\\SQLEXPRESS; Initial Catalog = DotNet; " + "Integrated Security = true";
                using (SqlConnection conn = new SqlConnection(ConnectionString))
                {
                    conn.Open();
                    int recordsInserted = 0;
                    for (int i = 0; i < myUserProfile.Count; i++)
                    {
                        // string commandText = $"UPDATE UserProfile where '{myUserProfile[i].UserId}','{myUserProfile[i].UserFirstName}', '{myUserProfile[i].UserLastName}', '{myUserProfile[i].UserPassword}', '{myUserProfile[i].DateOfBirth}','{myUserProfile[i].CommunicationAddress}','{myUserProfile[i].EmailId}','{myUserProfile[i].MobileNumber}','{myUserProfile[i].Interests}')";

                        SqlCommand command = new SqlCommand($"UPDATE UserProfile set UserId='{myUserProfile[i].UserId}', UserFirstName ='{myUserProfile[i].UserFirstName}',UserLastName='{myUserProfile[i].UserLastName}',UserPassword='{myUserProfile[i].UserPassword}',DateOfBirth='{myUserProfile[i].DateOfBirth}',CommunicationAddress='{myUserProfile[i].CommunicationAddress},MobileNumber='{myUserProfile[i].MobileNumber},Interests='{myUserProfile[i].Interests} where EmailId='{myUserProfile[i].EmailId}'  ", conn);

                       // SqlCommand command = new SqlCommand(commandText, conn);



                        command.ExecuteNonQuery();

                        recordsInserted++;
                    }
                    conn.Close();



                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
            return Ok();

        }

    }

}
     



