package com.example.jobportal.dtorequest;





import com.example.jobportal.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class registerDtoRequest {
    private String username;
    private String email;
    private String password;
    private String mobileno;
    private Role role;
}
