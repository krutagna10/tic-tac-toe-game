function Score({ user, draw, computer }) {
  return (
    <>
      <h2>Scores</h2>
      <table>
        <thead>
          <tr>
            <th>User Score</th>
            <th>Draw Score</th>
            <th>Computer Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user}</td>
            <td>{draw}</td>
            <td>{computer}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Score;
