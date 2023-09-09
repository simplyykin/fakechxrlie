function convertScoreACT() {
    const actScore = parseFloat(document.getElementById('actScore').value);
    const multiplier = 44;
    const multiplier2 = 44.4444444;

    if (!isNaN(actScore)) {
        const satScore = multiplier * actScore;
      const satScore2 = multiplier2 * actScore;
       const roundedACTScore = Math.ceil(satScore / 10) * 10;
      const roundedACTScore2 = Math.ceil(satScore2 / 10) * 10;
        document.getElementById('resultact').textContent = `SAT Score Equivalent: ${roundedACTScore}-${roundedACTScore2}`;
    } else {
        document.getElementById('resultact').textContent = 'Please enter a valid ACT score.';
    }
}
function convertScoreSAT() {
    const actScore = parseFloat(document.getElementById('actScore1').value);
    const multiplier = 44.44444444444;

    if (!isNaN(actScore)) {
        const satScore = actScore / multiplier;
        document.getElementById('result1').textContent = `ACT Score Equivalent: ${Math.round(satScore)}`;
    } else {
        document.getElementById('result1').textContent = 'Please enter a valid SAT score.';
    }
}
