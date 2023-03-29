export const boilerPlate = [
  {
    name: 'javascript',
    value: `// Write your code here
    console.log('Hello World')`,
  },
  {
      name: "assembly",
      value: ` hello-DOS.asm - single-segment, 16-bit "hello world" program
      ;
      ; assemble with "nasm -f bin -o hi.com hello-DOS.asm"
      
          org  0x100        ; .com files always start 256 bytes into the segment
      
          ; int 21h is going to want...
      
          mov  dx, msg      ; the address of or message in dx
          mov  ah, 9        ; ah=9 - "print string" sub-function
          int  0x21         ; call dos services
      
          mov  ah, 0x4c     ; "terminate program" sub-function
          int  0x21         ; call dos services
      
          msg  db 'Hello, World!', 0x0d, 0x0a, '$'   ; $-terminated message`
    
  },
  { name:"bash",
  value:`echo " Hello World "`

  },
  {
    name:"basic",
    value:``
  },

  {
    name: "c",
    value: `
    #include <stdio.h>
    
    int main() {
        // Write C code here
        printf("Hello world");
    
        return 0;
    }`,
  },

  {
    name:"cpp",
    value:`//Write c++ code here
    #include <iostream>

    int main() {
        std::cout << "Hello World!";
        return 0;
    }`,


  },
  {
    name:"clojure",
    value:`(ns clojure.examples.hello
      (:gen-class))
   (defn hello-world []
      (println "Hello World"))
   (hello-world)`

  },

  {
    name:"csharp",
    value:`using System;

    public class HelloWorld
    {
        public static void Main(string[] args)
        {
            Console.WriteLine ("Hello Mono World");
        }
    }`
  },

  {
    name:"cobol",
    value:`IDENTIFICATION DIVISION.
    PROGRAM-ID. HELLO-WORLD.
    PROCEDURE DIVISION.
    DISPLAY 'Hello, world'.
    STOP RUN.`
  },

  {
    name:"lisp",
    value:`(write-line "Hello World")`
  },

  {
    name:"d",
    value:``
  },

  {
    name:"elixir",
    value:`IO.puts "Hello, world!"`
  },

  {
    name:"erlang",
    value:`-module(helloworld).
    -export([start/0]).
    
    start() ->
        io:fwrite("Hello, world!\n").`
  },

  {
    name:"exe",
    value:``
  },

  {
    name:"fsharp",
    value:`printfn "Hello World!"`
  },

  {
    name:"fortan",
    value:`Program Hello
    Print *, "Hello World"
    End Program Hello`
  },

  {
    name:"go",
    value:`package main
    import "fmt"
    
    func main() {
      fmt.Println("Hello World!")
    }`
  },

  {
    name:"groovy",
    value:`println("Hello world")`
  },

  {
    name:"haskell",
    value:`main = putStrLn "hello world"`
  },

  {
    name:"java",
    value:`class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
  }`
  },

  {
    name:"kotlin",
    value:`fun main() {
      println("Hello, World!")
  }`
  },

  {
    name:"lua",
    value:`print("Hello World!")`
  },

  {
    name:"objectivec",
    value:`#import <Foundation/Foundation.h>

    int main (int argc, const char * argv[])
    {
       NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
    
       NSLog (@"hello world");
       [pool drain];
       return 0;
    }`
  },

  {
    name:"ocaml",
    value:`print_string "Hello world!\n";;`
  },

  {
    name:"octave",
    value:``
  },
  {
    name:"pascal",
    value:`program Hello;
    begin
      writeln ('Hello World')
    end.
    `
  },

  {
    name:"perl",
    value:`print "Hello World";`
  },

  {
    name:"php",
    value:`echo "Hello World";`
  },

  {
    name:"text",
    value:``
  },

  {
    name:"prolog",
    value:`main:-
    process,
    halt.

process:-
    write('Hello World').
:- main.`
  },

  {
    name:"python",
    value:`print("hello world")`
  },

  {
    name:"r",
    value:`print("Hello World")`
  },

  {
    name:"ruby",
    value:`puts "Hello World"`
  },
  {
    name:"rust",
    value:`fn main() {
      println!("Hello World");
  }`
  },

  


];
