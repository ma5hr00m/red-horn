def calculate_polygon_attributes(pixso_data):
    """
    计算 polygon 属性值，处理嵌套列表数据。

    Args:
        pixso_data: 嵌套列表数据，每个子列表包含图形和多边形顶点信息。

    Returns:
        一个字符串，包含每个子列表计算得到的格式化 polygon 属性值，并用换行符分隔。
    """

    results = []
    for data in pixso_data:
        graphic_x, graphic_y, graphic_w, graphic_h, point1_x, point1_y, point2_x, point2_y, point3_x, point3_y, color = data

        point1_res_x = (point1_x - graphic_x) / graphic_w * 100
        point1_res_y = (point1_y - graphic_y) / graphic_h * 100
        point2_res_x = (point2_x - graphic_x) / graphic_w * 100
        point2_res_y = (point2_y - graphic_y) / graphic_h * 100
        point3_res_x = (point3_x - graphic_x) / graphic_w * 100
        point3_res_y = (point3_y - graphic_y) / graphic_h * 100

        # 格式化百分比，将 0.00% 简写为 0
        def format_percentage(value):
            return f"{value:.2f}%" if value != 0 else "0"

        polygon_attribute = f"polygon({format_percentage(point1_res_x)} {format_percentage(point1_res_y)}, {format_percentage(point2_res_x)} {format_percentage(point2_res_y)}, {format_percentage(point3_res_x)} {format_percentage(point3_res_y)})"
        formatted_data = f"( {graphic_x}em, {graphic_y}em, {graphic_w}em, {graphic_h}em, {color}, {polygon_attribute} ),"
        results.append(formatted_data)

    # 使用 '\n' 连接结果列表，并输出
    return '\n'.join(results)

# 示例用法
pixso_data = [
    # [graphic_x, graphic_y, graphic_w, graphic_h, point1_x, point1_y, point2_x, point2_y, point3_x, point3_y, color],
    # left horn
    [0, 0, 21, 142, 0, 0, 21, 98, 0, 142, '#E91111'],
    [0, 98, 36, 48, 21, 98, 36, 146, 0, 142, '#4C4C4C'],
    [0, 142, 40, 51, 0, 142, 36, 146, 40, 193, '#2E2E2E'],
    [0, 142, 40, 76, 0, 142, 40, 193, 20, 218, '#181818'],
    [36, 146, 23, 47, 36, 146, 59, 173, 40, 193, '#676767'],
    [40, 173, 29, 29, 59, 173, 69, 202, 40, 193, '#3D3D3D'],
    [40, 193, 29, 40, 40, 193, 69, 202, 65, 233, '#676767'],
    [20, 193, 45, 40, 40, 193, 65, 233, 20, 218, '#4C4C4C'],
    [229, 0, 21, 142, 250, 0, 250, 142, 229, 98, '#E91111'],
    [214, 98, 36, 48, 229, 98, 250, 142, 214, 146, '#4C4C4C'],
    [210, 142, 40, 51, 214, 146, 250, 142, 210, 193, '#2E2E2E'],
    [210, 142, 40, 76, 250, 142, 230, 218, 210, 193, '#181818'],
    [191, 146, 23, 47, 214, 146, 210, 193, 191, 173, '#676767'],
    [181, 173, 29, 29, 191, 173, 210, 193, 181, 202, '#3D3D3D'],
    [181, 193, 29, 40, 210, 193, 185, 233, 181, 202, '#676767'],
    [185, 193, 45, 40, 210, 193, 230 ,218, 185, 233, '#4C4C4C'],
    [59, 173, 66, 29, 59, 173, 125, 189, 69, 202, '#676767'],
    [65, 189, 60, 44, 125, 189, 65, 233, 69, 202, '#2E2E2E'],
    [65, 189, 60, 89, 125, 189, 125, 257, 65, 233, '#676767'],
    [65, 233, 60, 47, 65, 233, 125, 257, 96, 280, '#4C4C4C'],
    [96, 257, 58, 23, 125, 257, 154, 280, 96, 280, '#696969'],
    [125, 233, 60, 47, 185, 233, 154, 280, 125, 257, '#2D2D2D'],
    [125, 189, 60, 68, 125, 189, 185, 233, 125, 257, '#4C4C4C'],
    [125, 189, 60, 44, 125, 189, 181, 202, 185, 233, '#181818'],
    [125, 173, 66, 29, 191, 173, 181, 202, 125, 189, '#676767']
]

polygon_attributes = calculate_polygon_attributes(pixso_data)

print(polygon_attributes)
