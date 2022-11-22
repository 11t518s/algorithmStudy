function solution(id_list, report, k) {
  const settedReport = [...new Set(report)];
  const reportedId = settedReport.map((item) => {
    const splitedReport = item.split(" ");
    return {
      report: splitedReport[0],
      reported: splitedReport[1],
    };
  });

  const punishedUser = id_list.filter(
    (id) => reportedId.filter((item) => item.reported === id).length >= k
  );

  return id_list.map(
    (id) =>
      reportedId
        .filter((rId) => punishedUser.find((pUser) => pUser === rId.reported))
        .filter((rId) => rId.report === id).length
  );
}
