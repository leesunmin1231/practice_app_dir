import React from "react";

export default async function Form() {
  async function handleSubmit(formData: any) {
    "use server";
    // 서버에 로그 찍힌다.
    console.log(formData.get("title"));

    // api서버를 따로 두지 않는다면, DB에 직접 저장 & 가져오기 등 로직 사용가능
    // 서버에서 동작하기 때문에 유저에게 코드가 노출되지 않음
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Submit</button>
    </form>
  );
}
