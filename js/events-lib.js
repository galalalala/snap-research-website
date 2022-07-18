const eventsList = [
  {
    id: 1,
    date: "January 01, 2016",
    eventName: "",
    eventShort: "ECCV 2016 (Oral Presentation)",
    url: "",
  },
  {
    id: 2,
    date: "February 25, 2016",
    eventName: "",
    eventShort: "ACM International Conference on WSDM 2016",
    url: "",
  },
  {
    id: 3,
    date: "May 09, 2016",
    eventName: "",
    eventShort: "AAAI Conference on Artificial Intelligence 2016",
    url: "",
  },
  {
    id: 4,
    date: "July 18, 2016",
    eventName: "",
    eventShort: "IEEE TIP 2017",
    url: "",
  },
  {
    id: 6,
    date: "October 01, 2016",
    eventName: "",
    eventShort: "IEEE TIP 2016",
    url: "",
  },
  {
    id: 7,
    date: "November 17, 2016",
    eventName: "",
    eventShort: "BMVC 2017 (Oral Presentation)",
    url: "",
  },
  {
    id: 8,
    date: "March 07, 2017",
    eventName: "",
    eventShort: "ICCV 2017",
    url: "",
  },
  {
    id: 9,
    date: "April 12, 2017",
    eventName: "",
    eventShort: "CVPR 2017",
    url: "",
  },
  {
    id: 10,
    date: "April 13, 2017",
    eventName: "",
    eventShort: "ICLR 2017",
    url: "",
  },
  {
    id: 11,
    date: "April 19, 2017",
    eventName: "",
    eventShort: "IJCAI 2017",
    url: "",
  },
  {
    id: 13,
    date: "August 12, 2017",
    eventName: "",
    eventShort: "UAI 2017",
    url: "",
  },
  {
    id: 14,
    date: "August 20, 2017",
    eventName: "",
    eventShort: "Interspeech 2017",
    url: "",
  },
  {
    id: 16,
    date: "September 05, 2017",
    eventName: "",
    eventShort:
      "ICML 2016 (Workshops on Advances in Non-convex Analysis and Optimization)",
    url: "",
  },
  {
    id: 17,
    date: "September 11, 2017",
    eventName: "",
    eventShort:
      "IEEE Transactions on Pattern Analysis and Machine Intelligence, 2017",
    url: "",
  },
  {
    id: 18,
    date: "November 01, 2017",
    eventName: "",
    eventShort: "ACM Transactions on Graphics (SIGGRAPH Asia 2017)",
    url: "",
  },
  {
    id: 19,
    date: "November 30, 2017",
    eventName: "",
    eventShort: "NIPS Workshops, 2017",
    url: "",
  },
  {
    id: 20,
    date: "December 04, 2017",
    eventName: "",
    eventShort: "NIPS 2017 (Workshop Optimization for Machine Learning (OPT))",
    url: "",
  },
  {
    id: 21,
    date: "December 14, 2017",
    eventName: "",
    eventShort: "CVPR 2018",
    url: "",
  },
  {
    id: 22,
    date: "January 05, 2018",
    eventName: "",
    eventShort: "ICLR 2018 (Workshop)",
    url: "",
  },
  {
    id: 23,
    date: "January 28, 2018",
    eventName: "",
    eventShort: "ICASSP 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 24,
    date: "February 04, 2018",
    eventName: "",
    eventShort: "VPR 2018",
    url: "",
  },
  {
    id: 25,
    date: "February 28, 2018",
    eventName: "",
    eventShort: "NAACL 2018",
    url: "",
  },
  {
    id: 26,
    date: "February 28, 2018",
    eventName: "",
    eventShort: "ICLR 2018",
    url: "",
  },
  {
    id: 27,
    date: "March 22, 2018",
    eventName: "",
    eventShort: "ICWSM 2018 (Workshop)",
    url: "",
  },
  {
    id: 29,
    date: "April 11, 2018",
    eventName: "",
    eventShort: "ICPR 2018",
    url: "",
  },
  {
    id: 30,
    date: "April 17, 2018",
    eventName: "",
    eventShort: "ICPRAI 2018",
    url: "",
  },
  {
    id: 32,
    date: "April 21, 2018",
    eventName: "",
    eventShort: "CHI 2018",
    url: "",
  },
  {
    id: 33,
    date: "April 22, 2018",
    eventName: "",
    eventShort: "WWW 2018 (Poster)",
    url: "",
  },
  {
    id: 35,
    date: "April 24, 2018",
    eventName: "",
    eventShort: "ASONAM 2018",
    url: "",
  },
  {
    id: 36,
    date: "April 27, 2018",
    eventName: "",
    eventShort: "WWW 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 37,
    date: "April 27, 2018",
    eventName: "",
    eventShort: "WWW 2018",
    url: "",
  },
  {
    id: 38,
    date: "April 30, 2018",
    eventName: "",
    eventShort: "ECML-PKDD 2018",
    url: "",
  },
  {
    id: 40,
    date: "May 06, 2018",
    eventName: "",
    eventShort: "KDD 2018",
    url: "",
  },
  {
    id: 41,
    date: "May 06, 2018",
    eventName: "",
    eventShort: "ICIP 2018",
    url: "",
  },
  {
    id: 42,
    date: "May 22, 2018",
    eventName: "",
    eventShort: "ICML 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 43,
    date: "May 29, 2018",
    eventName: "",
    eventShort: "KDD Bigmine 2018",
    url: "",
  },
  {
    id: 44,
    date: "June 03, 2018",
    eventName: "",
    eventShort: "Interspeech 2018",
    url: "",
  },
  {
    id: 45,
    date: "June 10, 2018",
    eventName: "",
    eventShort: "ACL 2018",
    url: "",
  },
  {
    id: 47,
    date: "July 03, 2018",
    eventName: "",
    eventShort: "ECCV 2018",
    url: "",
  },
  {
    id: 49,
    date: "July 08, 2018",
    eventName: "",
    eventShort: "ACM Multimedia 2018",
    url: "",
  },
  {
    id: 50,
    date: "July 08, 2018",
    eventName: "",
    eventShort: "ACM Multimedia 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 51,
    date: "July 22, 2018",
    eventName: "",
    eventShort: "3DV 2018",
    url: "",
  },
  {
    id: 55,
    date: "August 01, 2018",
    eventName: "",
    eventShort: "SIGIR eCom 2018",
    url: "",
  },
  {
    id: 56,
    date: "August 01, 2018",
    eventName: "",
    eventShort: "Behavior Research Methods",
    url: "",
  },
  {
    id: 57,
    date: "August 10, 2018",
    eventName: "",
    eventShort: "EMNLP 2018",
    url: "",
  },
  {
    id: 58,
    date: "August 14, 2018",
    eventName: "",
    eventShort: "KDD 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 60,
    date: "August 30, 2018",
    eventName: "",
    eventShort: "SIGGRAPH Asia 2018",
    url: "",
  },
  {
    id: 63,
    date: "September 05, 2018",
    eventName: "",
    eventShort: "NIPS 2018",
    url: "",
  },
  {
    id: 66,
    date: "January 09, 2019",
    eventName: "",
    eventShort: "CVPR 2019",
    url: "",
  },
  {
    id: 68,
    date: "February 26, 2019",
    eventName: "",
    eventShort: "CHI 2019",
    url: "",
  },
  {
    id: 69,
    date: "March 01, 2019",
    eventName: "",
    eventShort: "UbiComp/IMWUT 2019",
    url: "",
  },
  {
    id: 72,
    date: "April 04, 2019",
    eventName: "",
    eventShort: "NAACL 2019",
    url: "",
  },
  {
    id: 75,
    date: "June 02, 2019",
    eventName: "",
    eventShort: "KDD 2019",
    url: "",
  },
  {
    id: 76,
    date: "June 16, 2019",
    eventName: "",
    eventShort: "ASONAM 2019",
    url: "",
  },
  {
    id: 77,
    date: "July 12, 2019",
    eventName: "",
    eventShort: "SIGGRAPH 2019",
    url: "",
  },
  {
    id: 79,
    date: "July 26, 2019",
    eventName: "",
    eventShort: "DSAA 2019",
    url: "",
  },
  {
    id: 80,
    date: "August 14, 2019",
    eventName: "",
    eventShort: "UbiComp/IMWUT 2019",
    url: "",
  },
  {
    id: 82,
    date: "August 26, 2019",
    eventName: "",
    eventShort: "ICCV 2019",
    url: "",
  },
  {
    id: 84,
    date: "October 20, 2019",
    eventName: "",
    eventShort: "ACM Multimedia 2019",
    url: "",
  },
  {
    id: 86,
    date: "November 07, 2019",
    eventName: "",
    eventShort: "ICLR 2020",
    url: "",
  },
  {
    id: 87,
    date: "January 15, 2020",
    eventName: "",
    eventShort: "WWW 2020",
    url: "",
  },
  {
    id: 88,
    date: "February 07, 2020",
    eventName: "",
    eventShort: "AAAI 2020",
    url: "",
  },
  {
    id: 89,
    date: "April 07, 2020",
    eventName: "",
    eventShort: "IMX 2020",
    url: "",
  },
  {
    id: 90,
    date: "July 05, 2020",
    eventName: "",
    eventShort: "ACL 2020",
    url: "",
  },
  {
    id: 91,
    date: "July 09, 2020",
    eventName: "",
    eventShort: "SIGGRAPH 2020",
    url: "",
  },
  {
    id: 93,
    date: "July 09, 2020",
    eventName: "",
    eventShort: "ECCV 2020",
    url: "",
  },
  {
    id: 94,
    date: "August 13, 2020",
    eventName: "",
    eventShort: "CSCW 2020",
    url: "",
  },
  {
    id: 95,
    date: "September 07, 2020",
    eventName: "",
    eventShort: "BMVC 2020",
    url: "",
  },
  {
    id: 96,
    date: "September 28, 2020",
    eventName: "",
    eventShort: "ICLR 2021",
    url: "",
  },
  {
    id: 97,
    date: "November 02, 2020",
    eventName: "",
    eventShort: "COLING 2020",
    url: "",
  },
  {
    id: 98,
    date: "November 16, 2020",
    eventName: "",
    eventShort: "EMNLP 2020",
    url: "",
  },
  {
    id: 99,
    date: "December 02, 2020",
    eventName: "",
    eventShort: "AAAI 2021",
    url: "",
  },
  {
    id: 100,
    date: "December 05, 2020",
    eventName: "",
    eventShort: "AIES 2021",
    url: "",
  },
  {
    id: 101,
    date: "January 04, 2021",
    eventName: "",
    eventShort: "CHI 2021",
    url: "",
  },
  {
    id: 102,
    date: "February 08, 2021",
    eventName: "",
    eventShort: "WWW 2021",
    url: "",
  },
  {
    id: 104,
    date: "March 15, 2021",
    eventName: "",
    eventShort: "ICWSM 2021",
    url: "",
  },
    {
    id: 106,
    date: "November 11, 2020",
    eventName: "The 7th Workshop on Noisy User-generated Text (W-NUT)",
    eventShort: "W-NUT 2021",
    url: "http://noisy-text.github.io/2021/",
  },
  {
    id: 107,
    date: "May 2, 2022",
    eventName: "ACM CHI Conference on Human Factors in Computing Systems",
    eventShort: "CHI 2022",
    url: "https://chi2022.acm.org/",
  },
{
    id: 108,
    date: "Janurary 01, 2021",
    eventName: "IEEE Transactions on Pattern Analysis and Machine Intelligence 2021",
    eventShort: "TPAMI 2021",
    url: "",
  },
  {
    id: 109,
    date: "Janurary 01, 2021",
    eventName: "IEEE Transactions on Visualization and Computer Graphics 2021",
    eventShort: "TVCG 2021",
    url: "",
  },
  {
    id: 110,
    date: "Janurary 05, 2021",
    eventName: "Winter Conference on Applications of Computer Vision 2021",
    eventShort: "WACV 2021",
    url: "",
  },
  {
    id: 111,
    date: "February 02, 2021",
    eventName: "AAAI Conference on Artificial Intelligence 2021",
    eventShort: "AAAI 2021",
    url: "",
  },
  {
    id: 112,
    date: "April 20, 2021",
    eventName: "ACM SIGGRAPH Symposium on Interactive 3D Graphics and Games 2021",
    eventShort: "i3D 2021",
    url: "",
  },
  {
    id: 113,
    date: "May 03, 2021",
    eventName: "International Conference on Learning Representations 2021",
    eventShort: "ICLR 2021",
    url: "",
  },
  {
    id: 114,
    date: "June 19, 2021",
    eventName: "IEEE/CVF Conference on Computer Vision and Pattern Recognition 2021",
    eventShort: "CVPR 2021",
    url: "",
  },
  {
    id: 115,
    date: "July 18, 2021",
    eventName: "International Conference on Machine Learning 2021",
    eventShort: "ICML 2021",
    url: "",
  },
  {
    id: 116,
    date: "October 11, 2021",
    eventName: "IEEE/CVF International Conference on Computer Vision 2021",
    eventShort: "ICCV 2021",
    url: "",
  },
  {
    id: 117,
    date: "December 06, 2021",
    eventName: "Conference on Neural Information Processing Systems 2021",
    eventShort: "NeurIPS 2021",
    url: "",
  },
  {
    id: 118,
    date: "Janurary 01, 2022",
    eventName: "International Journal of Computer Vision 2022",
    eventShort: "IJCV 2022",
    url: "",
  },
  {
    id: 119,
    date: "Janurary 01, 2022",
    eventName: "IEEE Transactions on Visualization and Computer Graphics 2022",
    eventShort: "TVCG 2022",
    url: "",
  },
  {
    id: 120,
    date: "April 25, 2022",
    eventName: "International Conference on Learning Representations 2022",
    eventShort: "ICLR 2022",
    url: "",
  },
  {
    id: 121,
    date: "June 19, 2022",
    eventName: "IEEE/CVF Conference on Computer Vision and Pattern Recognition 2022",
    eventShort: "CVPR 2022",
    url: "",
  },
   {
     id: 122,
     date: "May 22, 2022",
     eventName: "60th Annual Meeting of the Association for Computational Linguistics",
     eventShort: "ACL 2022",
     url: "https://www.2022.aclweb.org/",
   },
     {
     id: 123,
     date: "November 7, 2021",
     eventName: "The 2021 Conference on Empirical Methods in Natural Language Processing",
     eventShort: "EMNLP 2021",
     url: "https://2021.emnlp.org/",
   },
     {
     id: 124,
     date: "November 1, 2021",
     eventName: "30th ACM International Conference on Information and Knowledge Management",
     eventShort: "CIKM 2021",
     url: "https://www.cikm2021.org/",
   },
     {
     id: 125,
     date: "June 6, 2021",
     eventName: "2021 Annual Conference of the North American Chapter of the Association for Computational Linguistics",
     eventShort: "NAACL 2021",
     url: "https://2021.naacl.org/",
   },
     {
     id: 126,
     date: "November 1, 2021",
     eventName: "29th ACM International Conference on Information and Knowledge Management",
     eventShort: "CIKM 2020",
     url: "https://cikm2020.org/",
   },
     {
     id: 127,
     date: "June 10, 2021",
     eventName: "The 9th International Workshop on Natural Language Processing for Social Media",
     eventShort: "SocialNLP 2021",
     url: "https://sites.google.com/site/socialnlp2021/",
   },
  {
    id: 128,
    date: "August 23, 2020",
    eventName: "",
    eventShort: "KDD 2020",
    url: "https://kdd.org/kdd2020/",
  },
  {
    id: 129,
    date: "September 14, 2020",
    eventName: "",
    eventShort: "ECML-PKDD 2020",
    url: "https://ecmlpkdd2020.net/",
  },
  {
    id: 130,
    date: "August 24, 2020",
    eventName: "16th International Workshop on Mining and Learning with Graphs",
    eventShort: "MLG 2020",
    url: "https://www.mlgworkshop.org/2020/",
  },
  {
    id: 131,
    date: "August 30, 2021",
    eventName: "",
    eventShort: "TNNLS 2021",
    url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5962385",
  },
  {
    id: 132,
    date: "February 21, 2022",
    eventName: "15th ACM International WSDM Conference",
    eventShort: "WSDM 2022",
    url: "https://www.wsdm-conference.org/2022/",
  },
  {
    id: 133,
    date: "June 6, 2022",
    eventName: "16th International Conference on Web and Social Media",
    eventShort: "ICWSM 2022",
    url: "https://www.icwsm.org/2022/",
  },
  {
    id: 134,
    date: "April 7, 2022",
    eventName: "",
    eventShort: "CSCW 2022",
    url: "",
  },

  // {
  //   id: 105,
  //   date: "",
  //   eventName: "",
  //   eventShort: "",
  //   url: "",
  // },
];

function getEvents() {
  const tempEventList = eventsList.map((item) => {
    tempItem = { ...item };
    const { date } = tempItem;
    const [month, day, year] = date.split(" ");
    tempItem.month = month.slice(0, 3).toUpperCase();
    tempItem.day = parseInt(day);
    tempItem.year = +year;
    return tempItem;
  });
  return tempEventList.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}
