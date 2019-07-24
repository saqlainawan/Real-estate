$.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element)
      || value.length >= 6
      && /\d/.test(value)
      && /[a-z]/i.test(value);
  }, '* Your password must be at least 6 characters long and contain at least one number and one char\'.');

  $.validator.addMethod('validPhoneNumber', function(value, element) {
    return this.optional(element)
      && /\d/.test(value)
  }, '* Your password must be at least 6 characters long and contain at least one number and one char\'.')

  // $('#contact-agent-form').validate({
  //     rules:{
  //         name:{
  //           required:true
  //         },
  //         email: {
  //             required: true,
  //             email:true
  //         },
  //         phone_number: {
  //           required:true
  //         },
  //         message:{
  //           required: true
  //         }
  //     },
  //     errorPlacement: function(error, element) {
  //         error.insertBefore(element);
  //         error.siblings(".input-icon").addClass("error-icon");
  //         // console.log(error.siblings(".input-icon"));
  //         // element.parent(".form-group").child(".input-icon").addClass("saqlainError");
  //     },
  //     messages: {
  //         name:{
  //           required:"* Please enter the name"
  //         },
  //         email: {
  //             required: "* Please enter an email address",
  //             email : "* Please enter valid email"
  //         },
  //         phone_number:{
  //           required:"* Please enter the phone number"
  //         },
  //         message:{
  //           required:"* Please enter the message"
  //         }
  //     }
  // });
$('.login-form').not("#contactform").validate({
    rules:{
        email: {
            required: true,
            email:true
        },
        password: "* required",
    },
    messages: {
        email: {
            required: "* Please enter an email address",
            email : "* Please enter valid email"
        },
        password:"* Please enter the password"
    }
});
$('.signup-form').validate({
    rules:{
        firstname:{
            required: true
        },
        lastname:{
            required: true
        },
        signup_email: {
            required: true,
            email:true
        },
        signup_password: {
            required: true,
            strongPassword:true
        },
        password2: {
            required:true,
            equalTo:"#password"
        },
        gender:{
            required:true
        },
        phone_number: {
            required: true,
            validPhoneNumber:true
        }
    },
    messages: {
        firstname:{
            required:"* Please enter the first name"
        },
        lastname:{
            required:"* Please enter the last name"
        },
        signup_email: {
            required: "* Please enter an email address",
            email : "* Please enter valid email",
        },
        password2:{
            required:"* Please re-enter the password",
            equalTo:"* Password do not match"
        },
        signup_password:{
            required: "* Please enter the password"
        },
        gender:{
            required:"* Please select gender"
        },
        phone_number:{
            required:"* Please enter the phone number",
            validPhoneNumber:"Please enter valid phone number"
        }

    }
});
$('#contactform').validate({
    rules:{
        name:{
            required:true
        },
        email: {
            required: true,
            email:true
        },
        phone_number: {
            required: true
        },
        message:{
            required:true
        }
    },
    messages: {
        name:{
            required:"* Please enter the name"
        },
        email: {
            required: "* Please enter an email address",
            email : "* Please enter valid email"
        },
        phone_number:{
           required: "* Please enter the phone number"
        },
        message:{
            required:"Please enter the message"
        }
    }
})
