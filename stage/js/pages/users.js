$(document).ready(function() {
  dataLoad();
  // Reload Card Info
  var table = $('#users_table').DataTable();
  $('.card .card-action .reload').click(function(e) {
    e.preventDefault();
    $('.card .overflow').css('display', 'flex');
    table.ajax.reload(null, false); // user paging is not reset on reload
    setTimeout(function() {
      $('.card .overflow').fadeOut("slow");
    }, 100);
  });

  // Single Item Delete
  $(document).on("click", ".table-action .delete", function(e) {
    e.preventDefault();
    var user_id = $(this).attr("id");
    var token = $('meta[name="csrf-token"]').attr('content');
    $('#delete_model').modal('show');
    var firstname = $(this).parent().parent().siblings('.firstname').html();
    var lastname = $(this).parent().parent().siblings('.lastname').html();
    var name = firstname + ' ' + lastname;
    $('#delete_model #item_info').html(name);
    $('#delete_model #confirm').click(function(ev) {
      $.ajax({
        url: "{{ aurl('users')}}" + '/' + user_id,
        type: "post",
        data: {
          id: user_id,
          _method: 'DELETE',
          _token: token
        },
        success: function(data) {
          $('#delete_model').modal('hide');
          $('.messages').css('display', 'block');
          $('.messages .messages-info').html(data.message);
          setTimeout(function() {
            $('.messages').fadeOut('slow');
          }, 10000);

          table.ajax.reload(null, false); // user paging is not reset on reload
        }
      });
    });

  });

  // Load Data Function
  function dataLoad() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    $('#users_table').DataTable({
      destroy: true,
      processing: true,
      serverSide: true,
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
      ],
      dom: "Blfrtip",
      buttons: [{
          extend: 'print',
          title: 'Users_' + date,
          exportOptions: {
            columns: [1, 2, 3, 4, 5, 6, 7, 8]
          }
        },
        {
          extend: 'copy',
          title: 'Users_' + date,
          exportOptions: {
            columns: [1, 2, 3, 4, 5, 6, 7, 8],
          }
        },
        {
          extend: 'pdf',
          title: 'Users_' + date,
          exportOptions: {
            columns: [1, 2, 3, 4, 5, 6, 7, 8],
          }
        },
        {
          extend: 'excel',
          title: 'Users_' + date,
          exportOptions: {
            columns: [1, 2, 3, 4, 5, 6, 7, 8],
          }
        },
        {
          extend: 'csv',
          title: 'Users_' + date,
          exportOptions: {
            columns: [1, 2, 3, 4, 5, 6, 7, 8],
          }
        },
        {
          extend: 'colvis',
          title: 'Users_' + date,
          exportOptions: {
            columns: [1, 2, 3, 4, 5, 6, 7, 8],
          }
        },
      ],
      ajax: {
        url: 'http://ecommerce.work/app-admin/api/users',
        data: {
          action: 'google'
        },
      },
      columns: [{
          "orderable": false,
          "searchable": false,
          "data": null,
          "defaultContent": '<input class="items_delete" type="checkbox"/>'
        },
        {
          data: 'id'
        },
        {
          data: 'username',
          className: 'username'
        },
        {
          data: 'firstname',
          className: 'firstname'
        },
        {
          data: 'lastname',
          className: 'lastname'
        },
        {
          data: 'email',
          className: 'email'
        },
        {
          data: 'status',
          className: 'status'
        },
        {
          data: 'created_at',
          className: 'created_at'
        },
        {
          data: 'updated_at',
          className: 'updated_at'
        },
      ],
      columnDefs: [{
        targets: 9,
        className: 'text-center ',
        render: function(data, type, row, meta) {
          return '<div class="table-action">' +
            '<a href="#" class="delete btn btn-danger btn-sm" id="' + row['id'] + '"> <i class="fas fa-trash fa-fw"></i></a>' +
            '<a href="#" class="edit btn btn-success btn-sm" id="' + row['id'] + '"> <i class="fas fa-edit fa-fw"></i></a>' +
            '<a href="#" class="edit btn btn-info btn-sm" id="' + row['id'] + '"> <i class="fas fa-eye fa-fw"></i></a>' +
            '</div>'
        }
      }],

    });
  }

});
