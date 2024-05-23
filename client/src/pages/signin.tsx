import React, { useState } from "react";
import { Button } from "../components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import {useNavigate} from 'react-router-dom'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
function Signin() {
  const [loader,setLoader]= useState(false)
  const form = useForm();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      setLoader(true)
      const { username, email, password } = data;

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/signin`,
        {
          username,
          password,
          email
        },{
            withCredentials:true
        }
      );
      navigate('/')
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message);
    }finally{
      setLoader(false)
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <h2 className=" text-3xl font-bold mb-3">Sign In</h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" disabled={loader}>Submit</Button>
        </div>
      </form>
    </Form>
  );
}

export default Signin;
