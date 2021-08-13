<!DOCTYPE html>
<html>
<head>
    <title>Contacts</title>
    <style type="text/css">
        #contacts {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #contacts td, #contacts th {
            border: 1px solid #fff;
            padding: 8px;
        }

        #contacts tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        #contacts tr:hover {
            background-color: #ddd;
        }

        #contacts th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #a1a7a7;
            color: #111;
        }

        .main-container {
            float: none;
            position: relative;
            background-color: #fff;
            padding: 8px;
            border: 1px solid #fff;
            margin: 0 auto;
        }

        .table-container {
            width: 100%;
        }

        .heading-item a {
            text-align: right;
        }

        .heading {
            padding: 10px 0px;
        }

        .heading p {
            font-size: 0;
        }

        .heading p span {
            width: 50%;
            display: inline-block;
        }

        .heading p span.align-right {
            text-align: right;
        }

        span a {
            font-size: 16px;
        }
    </style>
</head>
<body>
<div class="main-container">
    <div class="table-container">
        @foreach ($groups as $group => $foods)
            <h2>{{$group}}</h2>
            <table id="contacts">
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Portions</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                @foreach($foods as $name => $food)
                    @if($name)
                        <tr>
                            <td>{{ $food['id'] }}</td>
                            <td>{{ $food['name'] }}</td>
                            <td>{{ $food['portions'] }}</td>
                            <td>{{ $food['price'] }}</td>
                            <td>{{ $food['total'] }}</td>
                        </tr>
                    @endif
                @endforeach
            </table>
        @endforeach
            <h2 style="text-align: right;margin:20px 0;">Total sum: {{$total}}</h2>
    </div>
</div>
</body>
</html>
