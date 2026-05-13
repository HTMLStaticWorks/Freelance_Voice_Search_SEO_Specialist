// Dashboard Specific Logic

document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle for Mobile
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    // Simple Data for Analytics (Placeholder logic)
    const analyticsData = {
        users: 1250,
        orders: 450,
        messages: 85,
        analytics: '85%'
    };

    // Populate dashboard if elements exist
    document.getElementById('total-users')?.textContent != null ? document.getElementById('total-users').textContent = analyticsData.users : null;
    document.getElementById('total-orders')?.textContent != null ? document.getElementById('total-orders').textContent = analyticsData.orders : null;
    document.getElementById('total-messages')?.textContent != null ? document.getElementById('total-messages').textContent = analyticsData.messages : null;
});
