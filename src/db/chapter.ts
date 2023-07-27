import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema({
  content: { type: String, required: true },
  id: { type: Number, required: true },
  story_id: { type: Number, required: true },
  chapter_number: { type: Number, required: true },
  time_edit: { type: Boolean, required: true },
});

export const ChapterModel = mongoose.model("Chapter", ChapterSchema);

export const getChapters = ChapterModel.find();
export const getChapterByChapterNumber = (chapter_number: number) =>
  ChapterModel.findOne({ chapter_number });
export const createChapter = (values: Record<string, any>) =>
  new ChapterModel(values).save().then((chapter) => chapter.toObject());
// {
//   "content": "Bốn hòn đảo của nhân ngư tộc đã biến thành một mảnh đại loạn.\n\nLúc này nơi đây không chỗ nào mà không có dị chất xâm nhập, thi độc thì lan tràn ở khắp mọi phía. Từng tu sĩ nhân ngư tộc còn sót lại cũng đều hiện ra biểu cảm dữ tợn, so với trước kia thì càng hung tàn hơn, giống như đang có dự định đồng quy vu tận cùng đệ tử Thất Huyết Đồng vậy.\n\nNhưng... Rất nhanh, tu sĩ nhân ngư tộc còn sống liền phát hiện chỗ không bình thường.\n\nMặc dù khí thế của tám con đại xà ở trên bốn hòn đảo càng ngày càng mạnh, vả lại dị chất cùng thi độc ở trên mặt đất càng ngày nồng đậm, còn có càng lúc càng nhiều những thi thể đang sống lại, nhưng rõ ràng phần lớn đệ tử của ngọn núi thứ bảy hình như đã có chuẩn bị từ sớm.\n\nBọn họ trực tiếp lấy ra rất nhiều Bạch Đan, sau đó ăn vào giống như ăn kẹo vậy. Còn có người lấy ra cả phù bảo chuyên môn ngăn cách dị chất trong một thời gian ngắn, không chút đau lòng sử dụng biện pháp để đối phó, thậm chí có một bộ phận bắt đầu đào hầm, hình như lựa chọn ẩn núp tránh đi đợt thi triều này, ngạnh kháng dị chất cùng thi độc, nhưng mà người làm như vậy phần lớn đều là hạng người mà tu vi bản thân không tầm thường. Đồng thời có một chút đệ tử Thất Huyết Đồng trực tiếp lấy ra Pháp Chu của riêng mình, trốn ở bên trong nhìn ra bên ngoài.\n\nCòn có một vài người lại lấy ra trận bàn để bố trí trận pháp, thậm chí còn hô hoán tới những đệ tử đồng tông khác, có thể dùng phí tổn nhất định để đi vào. \n\nKhoa trương nhất chính là ở trên đảo Y Mỹ Kỳ, có người rõ ràng không biết đã dùng phương pháp gì, vậy mà có thể khống chế được hơn mười thi thể vờn quanh thành một vòng, không ngừng phun ra nuốt vào dị chất cùng thi độc ở bốn phía, khiến cho đệ tử Thất Huyết Đồng ở trong đó vô cùng nhẹ nhõm, còn đưa ra giá cả để mời các đệ tử khác đến.\n\nPhải nói là đủ các loại phương pháp, vô số...\n\nThậm chí còn có một chút đệ tử Thất Huyết Đồng lại dứt khoát chui vào bên trong thi triều, đi tới để lục soát túi da ở trên thi thể, bên trong cũng diễn ra vô số cảnh dụ dỗ phục kích thi thể, chỗ nào cũng có. \n\nHình như bọn họ không thèm để ý chút nào tới tám con đại xà chín đầu ở phía trên kia, hay là nói, coi như tám con đại xà chín đầu này có kinh khủng hơn nữa, nhưng vẫn không cách nào ngăn cản ý niệm phát tài trong đầu của bọn họ cả. Rõ ràng đều cùng là sợ hãi, nhưng có một loại hoặc là giết chết ta, hoặc là đừng có tới ngăn cản ta đi lấy tài nguyên. \n\nMột màn này khiến cho đáy lòng của từng tên tu sĩ nhân ngư tộc đều hiện lên cảm giác vô lực, nhưng rất nhanh bọn họ đã biết vì sao lại như thế rồi, bởi vì trên bầu trời, giờ phút này Thất gia đang đứng trên Đại Dực, nguyên bản vẫn còn xem náo nhiệt, cảm thấy khó khăn lắm trận thí luyện mới trở nên thú vị.\n\nNhưng trong nháy mắt tiếp theo, khi lão nhìn thấy tám con đại xà chín đầu kia, ánh mắt của lão liền phát sáng lên, bỗng nhiên giơ tay lên hung hăng chúi xuống phái dưới, tám con rắn chín đầu lập tức liền có ba con phát ra tiếng kêu rên, thân thể ầm ầm tan vỡ, hóa thành khói đen lao ra khỏi trận pháp, nhanh chóng bị Thất gia bắt tới chỗ của mình.\n\nSau khi lão đưa tay về, trong thần sắc hiện ra một chút vui mừng. \n\n\"Đồ chơi này rất thú vị.\"\n\nCùng lúc đó, 13 trưởng lão Kết Đan cũng đều động tâm, cùng  nhao nhao ra tay, chỉ bất quá do có trận pháp tồn tại, cho nên khi bọn họ xuất thủ cũng sẽ bị trận pháp ảnh hưởng. Nhưng giờ phút này 13 người cùng phát lực xuống phía dưới, trên trận pháp lập tức liền rịn ra từng sợi hắc khí, bị bọn họ thu vào tay.\n\nTrên trăm Trúc Cơ ở một bên làm sao có thể ngồi nhìn, từng người đều triển khai thủ đoạn của riêng mình, có người thậm chí còn bay tới gần biên giới trận pháp, điên cuồng thu hắc khí.\n\nMà dưới sự cướp đoạt của bọn họ, năm con đại xà còn lại trong trận pháp cũng giống như không còn sức lực nữa, khí tức giảm mạnh trong nháy mắt, một con trong đó còn trực tiếp bị hút khô, chỉ kịp phát ra một tiếng kêu rên liền lập tức tiêu tán.\n\nBốn con còn lại cũng đang liên tục bị giảm bớt sức mạnh, bắt đầu từ Kết Đan, nhưng rất nhanh đã chỉ còn Trúc Cơ sơ kỳ. Vả lại vẫn không kết thúc, vẫn còn tiếp tục suy giảm, chỉ là tốc độ hơi chậm lại một chút.\n\nLão tổ nhân ngư tộc nhìn hết một màn này, sau đó nhìn qua từng tu sĩ Thất Huyết Đồng ở bốn phía, khi thấy trên mặt từng tên đều có vẻ hưng phấn, lúc này đáy lòng của lão đã hoàn toàn tuyệt vọng. \n\nĐường đường là Thất Huyết Đồng, tông môn lớn như thế, nhưng từ khi tên Trịnh Khải Dịch này trở thành Phong chủ của ngọn núi thứ bảy, thay đổi rồi, tất cả đều đã thay đổi hết rồi...\n\nCùng lúc đó, đệ tử của Thất Huyết Đồng trên bốn đảo nhân ngư tộc cũng thấy một màn này, cũng có một chút người động tâm lao ra, cùng đồng tông liên thủ, vây giết đại xà. \n\nTrên Đảo Câu Anh, Đinh Tiêu Hải với quàn áo tàn phá nhưng khí thế của gã liền như một đạo cầu vồng, gã cũng là người thứ nhất lao thẳng đến đại xà ở ngoài thành xương cá, bên cạnh còn có ba vị đồng môn từ bốn phía vọt tới, đồng loạt ra tay cùng gã. Chỉ bất quá mục đích của ba người kia là thu hắc khí, mà mục đích của Đinh Tiêu Hải là đánh chết con đại xà này.\n\nTiếng nổ lập tức vang vọng, Hứa Thanh cũng thấy được một màn này, cũng nhìn thấy ba người đồng loạt ra tay cùng Đinh Tiêu Hải, mỗi một người đều không hề tầm thường, bên trong còn có một thiếu nữ mặc đạo bào màu xám, thiếu nữ này rất dễ hấp dẫn ánh mắt chú ý của người ngoài.\n\nDáng người thiếu nữ này nhỏ nhắn xinh xắn, nhưng lại vô cùng quyến rũ, khuôn mặt giống như bông sen, lông mày như liễu, ánh mắt vô cùng câu dẫn nhân tâm, so với hoa đào còn quyến rũ hơn, mái tóc tinh lệ bay múa theo gió, bờ môi đỏ tươi hơi cong lên, xinh đẹp phi phàm.\n\nĐạo bào trên người nàng rất là rộng, nhưng lúc thân thể lắc lư vẫn có thể nhìn ra bộ ngực sung mãn cùng với bộ mông cong như trái đào, nhất là vòng eo nàng còn rất nhỏ, điều này càng khiến cho vóc dáng của nàng đặc biệt khiến người khác chú ý.\n\nTrương Tam nuốt ngụm nước miếng, nhưng uy áp đến từ đại xà khiến cho tâm thần gã phải rung động lắc lư, gã cảm thấy với thực lực của mình, sợ là bị một cái đầu rắn quét ngang thì không chết cũng phải tàn phế.\n\nHứa Thanh đưa mắt nhìn qua, trong mắt không có bất kỳ gợn sóng nào, trọng điểm nhìn của hắn chính là con đại xà chín đầu kia, giờ phút này bộ dáng của con đại xà trước mặt này liền trùng lặp với bộ dáng của con trong bích hoạ, việc này khiến cho hắn rất giật mình, đồng thời trong đáy lòng cũng lập tức dâng lên sự cảnh giác nồng đậm. \n\nHắn bỗng lo lắng, nếu như con rắn này vẫn còn tồn tại, vậy thì phải chăng người khổng lồ nâng hai tòa đại thế giới ở trên bờ vai kia cũng sẽ xuất hiện.",
//   "id": 179765,
//   "story_id": 382,
//   "chapter_number": 302,
//   "time_edit": true
// },
