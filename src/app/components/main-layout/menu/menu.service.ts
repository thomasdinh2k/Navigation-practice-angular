import { Injectable } from '@angular/core';
import { Folder } from './menu.type';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  MenuFolder: any[] = [
    {
      name: 'Báo cáo tổng hợp',
      folders: [
        {
          name: 'Năm 2023',
          folders: [
            { name: 'Quý 1' },
            { name: 'Quý 2' },
            {
              name: 'Quý 3',
              folders: [
                { name: 'Tháng 7' },
                { name: 'Tháng 8' },
                {
                  name: 'Tháng 9',
                  folders: [
                    { name: 'Phân tích mẫu' },
                    { name: 'Kết quả đo đạc' },
                    { name: 'Đánh giá hiện trạng' },
                    {
                      name: 'Đánh giá chi tiết',
                      folders: [
                        {
                          name: 'Tan',
                          folders: [
                            {
                              name: 'Tan 1',
                              folders: [
                                {
                                  name: 'Tan 1.1',
                                  folders: [
                                    {
                                      name: 'Tan 1.1.1',
                                      folders: [
                                        {
                                          name: 'Tan 1.1.1.1',
                                          folders: [
                                            {
                                              name: 'Tan 1.1.1.1.1',
                                              folders: [
                                                {
                                                  name: 'Tan 1.1.1.1.1.1',
                                                  folders: [
                                                    {
                                                      name: 'Tan 1.1.1.1.1.1.1',
                                                      folders: [
                                                        {
                                                          name: 'Tan 1.1.1.1.1.1.1.1',
                                                          folders: [
                                                            {
                                                              name: 'Tan 1.1.1.1.1.1.1.1.1',
                                                              folders: [
                                                                {
                                                                  name: 'Tan 1.1.1.1.1.1.1.1.1.1',
                                                                  folders: [
                                                                    {
                                                                      name: 'Tan 1.1.1.1.1.1.1.1.1.1.1',
                                                                      folders: [
                                                                        {
                                                                          name: 'Tan 1.1.1.1.1.1.1.1.1.1.1.1',
                                                                          folders:
                                                                            [
                                                                              {
                                                                                name: 'Tan 1.1.1.1.1.1.1.1.1.1.1.1.1',
                                                                                folders:
                                                                                  [
                                                                                    {
                                                                                      name: 'Tan 1.1.1.1.1.1.1.1.1.1.1.1.1.1',
                                                                                      folders:
                                                                                        [],
                                                                                    },
                                                                                  ],
                                                                              },
                                                                            ],
                                                                        },
                                                                      ],
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { name: 'Quý 4' },
          ],
        },
        { name: 'Năm 2022' },
        { name: 'Năm 2021' },
        { name: 'Tổng hợp dự án trước' },
        { name: 'Sổ tay kỹ thuật' },
        { name: 'Đánh giá sơ bộ' },
        { name: 'Tiêu chuẩn đo lường' },
        { name: 'Kết quả xét nghiệm' },
        { name: 'Báo cáo chi tiết địa tầng' },
        { name: 'Dữ liệu bản đồ GIS' },
      ],
    },
    {
      name: 'Kết quả khảo sát thực địa',
      folders: [
        { name: 'Miền Bắc' },
        {
          name: 'Miền Trung',
          folders: [
            { name: 'Tháng 1' },
            { name: 'Tháng 2' },
            {
              name: 'Tháng 3',
              folders: [
                { name: 'Khu vực A' },
                { name: 'Khu vực B' },
                {
                  name: 'Khu vực C',
                  folders: [
                    { name: 'Bản vẽ chi tiết' },
                    { name: 'Hình ảnh chụp' },
                    { name: 'Video khảo sát' },
                    {
                      name: 'Ghi chú hiện trường',
                      folders: [
                        { name: 'Lịch sử chỉnh sửa' },
                        { name: 'Phiếu đo đạc' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { name: 'Miền Nam' },
        { name: 'Đảo và hải đảo' },
        { name: 'Tài liệu phân tích' },
        { name: 'Tổng hợp dữ liệu nhiệt độ' },
        { name: 'Độ sâu và địa tầng' },
        { name: 'Dự án khảo sát mẫu đất' },
        { name: 'Đánh giá địa chất công trình' },
        { name: 'Kết quả báo cáo cuối kỳ' },
      ],
    },
    {
      name: 'Dữ liệu phân tích mẫu',
      folders: [
        { name: 'Mẫu đất nền' },
        { name: 'Mẫu đá và khoáng sản' },
        { name: 'Mẫu nước ngầm' },
        { name: 'Kết quả thí nghiệm cường độ' },
        {
          name: 'Kết quả thí nghiệm thành phần',
          folders: [
            { name: 'Tháng 4' },
            { name: 'Tháng 5' },
            {
              name: 'Tháng 6',
              folders: [
                { name: 'Khu vực núi cao' },
                { name: 'Vùng đồng bằng' },
                {
                  name: 'Khu vực ven biển',
                  folders: [
                    { name: 'Thống kê phân loại mẫu' },
                    { name: 'Hồ sơ đối chiếu' },
                    {
                      name: 'Dữ liệu chi tiết',
                      folders: [{ name: 'Phiếu kiểm tra' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { name: 'Hồ sơ phân tích hóa học' },
        { name: 'Ghi chú phân tích vật lý' },
        { name: 'Biên bản thử nghiệm mẫu' },
        { name: 'Đánh giá chất lượng mẫu' },
        { name: 'Tổng hợp và đối chiếu mẫu' },
        { name: 'Thống kê kết quả mẫu' },
      ],
    },
    {
      name: 'Dự án khảo sát công trình',
      folders: [
        { name: 'Dự án cầu đường' },
        { name: 'Dự án xây dựng' },
        { name: 'Dự án đê điều' },
        { name: 'Dự án nhà máy' },
        { name: 'Dự án dân sinh' },
        {
          name: 'Đánh giá độ lún nền móng',
          folders: [
            { name: 'Tài liệu địa chất công trình' },
            { name: 'Mẫu kiểm tra tại chỗ' },
            {
              name: 'Phân tích chi tiết',
              folders: [
                { name: 'Báo cáo kết quả' },
                { name: 'Ảnh hiện trường' },
                {
                  name: 'Phân tích sâu',
                  folders: [
                    { name: 'Thống kê nghiệm thu' },
                    { name: 'Tài liệu đính kèm' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Bản đồ và tài liệu GIS',
      folders: [
        { name: 'Bản đồ địa hình' },
        { name: 'Bản đồ khoáng sản' },
        { name: 'Bản đồ địa chất công trình' },
        { name: 'Bản đồ khảo sát thực địa' },
        { name: 'Tài liệu GIS nền' },
        {
          name: 'Dữ liệu bản đồ chi tiết',
          folders: [
            { name: 'Độ cao địa hình' },
            { name: 'Độ sâu địa chất' },
            { name: 'Bản đồ hải đảo' },
            {
              name: 'Bản đồ nhiệt độ',
              folders: [
                { name: 'Dữ liệu phân tích' },
                { name: 'Bản đồ tỷ lệ lớn' },
                {
                  name: 'Hồ sơ kết quả',
                  folders: [{ name: 'Phân loại nhiệt độ' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  getAllNavsFolder(): Folder[] {
    return this.MenuFolder;
  }

  removeAllNavs(): Folder[] {
    return (this.MenuFolder = []);
  }

  constructor() {}
}
