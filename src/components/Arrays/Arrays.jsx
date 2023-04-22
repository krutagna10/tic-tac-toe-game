function Arrays({ userArray, computerArray, optionsArray }) {
  console.log(userArray);

  return (
    <table className="margin-300">
      <thead>
        <tr>
          <th>User Array</th>
          <th>Computer Array</th>
          <th>Options Array</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[{userArray.join(" ,")}]</td>
          <td>[{computerArray.join(" ,")}]</td>
          <td>[{optionsArray.join(" ,")}]</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Arrays;
