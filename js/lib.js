
$(document).ready(function() {
    $('#btn-set-pg').on('click',function(){
        let ac_token=$('#txt_ac_token').val();
        let pg_name=$('#txt_pg_name').val();
        fetch_page(ac_token,pg_name);
    });
});

