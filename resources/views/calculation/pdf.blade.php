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
        @foreach($foods as $food => $ingredients)
                <h2 class="text-center" style="text-align: center;">{{$food}}</h2>
                <table id="contacts">
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Measure</th>
                    </tr>

                    @foreach($ingredients as $ingredient)
                        @if($ingredient['name'])
                            <tr>
                                <td>{{ $ingredient['id'] }}</td>
                                <td>{{ $ingredient['name'] }}</td>
                                <td>{{ $ingredient['quantity'] }}</td>
                                <td>{{ $ingredient['measure'] }}</td>
                            </tr>
                        @endif
                    @endforeach

                    {{--<tr>--}}
                        {{--<td>Suma:</td>--}}
                        {{--<td></td>--}}
                        {{--<td></td>--}}
                        {{--<td></td>--}}
                        {{--<td>{{$ingredients['total']}}</td>--}}
                    {{--</tr>--}}
                </table>
            @endforeach
        @endforeach
    </div>
</div>
</body>
</html>
