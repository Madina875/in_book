import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3000;
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());

    app.useGlobalPipes(new ValidationPipe()); // to use validation everywhere
    app.setGlobalPrefix("api");
    const config = new DocumentBuilder()
      .setTitle("in_book")
      .setDescription("InBook API")
      .setVersion("1.0")
      .addTag(
        "swagger, validation, accessToken, refreshToken cookie , bot , smm, guards"
      )
      .addBearerAuth()
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api/docs", app, documentFactory);

    await app.listen(PORT, () => {
      console.log(`server running on port : ${PORT}✅`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();

/*

Authentication:

nest g res auth --no-spec
npm i bcrypt
npm i -D @types/bcrypt
npm install --save @nestjs/jwt

*/
