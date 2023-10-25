document.write("<!DOCTYPE html>");
document.write("<html>");
document.write("    <head>");
document.write("        <meta charset=\"UTF-8\">");
document.write("        <link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\">");
document.write("        <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin>");
document.write("        <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Short+Stack&display=swap\" rel=\"stylesheet\">");
document.write("        <link href=\"css\/flagStyle.css\" rel=\"stylesheet\">");
document.write("    <\/head>");
document.write("    <style>");
document.write(" ");
document.write(".Palestine-section{");
document.write("    font-family: 'Short Stack', cursive;");
document.write("    display: flex;");
document.write("    flex-direction: row;");
document.write("    justify-content: center;");
document.write("    background-color: rgb(236, 183, 98);");
document.write("    width: 100%;");
document.write("    height: 80px;");
document.write("    padding: 16px;");
document.write("    ");
document.write("    bottom: 0;");
document.write("    position: fixed;");
document.write("}");
document.write("");
document.write(".Palestine-section p{");
document.write("  display: flex;");
document.write("  padding-left: 20px;");
document.write("  font-size: 15px;");
document.write("  color: rgb(0, 0, 0);");
document.write("}");
document.write("");
document.write(".Palestine-section .flag{");
document.write("    display: flex;");
document.write("    flex-direction: column;");
document.write("    align-items: center;");
document.write("    width: 80px;");
document.write("    height: auto;");
document.write("    position: relative;");
document.write("}");
document.write(".Palestine-section .column{");
document.write("    display: flex;");
document.write("    flex-direction: row;");
document.write("    width: 100%;");
document.write("    height: 16px;");
document.write("}");
document.write("");
document.write(".Palestine-section .black{");
document.write("    background-color: black;");
document.write("}");
document.write(".Palestine-section .white{");
document.write("    background-color: white;");
document.write("}");
document.write(".Palestine-section .green{");
document.write("    background-color: green;");
document.write("}");
document.write("");
document.write(".red-triangle{");
document.write("    display: flex;");
document.write("    flex-direction: column;");
document.write("    width: 0;");
document.write("    height: 0;");
document.write("    border-top: 24px solid transparent;");
document.write("    border-bottom: 24px solid transparent;");
document.write("    border-left: 24px solid red;");
document.write("    position: absolute;");
document.write("    top: 0;");
document.write("    left: 0;");
document.write("}");
document.write("");
document.write("@media(max-width:1200px){");
document.write("");
document.write("    .Palestine-section{");
document.write("        width: 100%;");
document.write("        height: 80px;");
document.write("        padding: 16px;");
document.write("    }");
document.write("    .Palestine-section p{");
document.write("        font-size: 14px;");
document.write("    }");
document.write("");
document.write("    .Palestine-section .column{");
document.write("        width: 100%;");
document.write("        height: 14px;");
document.write("    }");
document.write("");
document.write("    .red-triangle{");
document.write("        border-top: 20px solid transparent;");
document.write("        border-bottom: 20px solid transparent;");
document.write("        border-left: 20px solid red;");
document.write("    }");
document.write("");
document.write("}");
document.write("    <\/style>");
document.write("");
document.write("    <body>");
document.write("");
document.write("        <div class=\"Palestine-section\">");
document.write("            <div class=\"flag\">");
document.write("                <div class=\"column black\"><\/div>");
document.write("                <div class=\"column white\"><\/div>");
document.write("                <div class=\"column green\"><\/div>");
document.write("                <div class=\"red-triangle\"><\/div>");
document.write("            <\/div>");
document.write("            <p>Free Palestine<\/p>");
document.write("        <\/div>");
document.write("");
document.write("    <\/body>");
document.write("<\/html>");
