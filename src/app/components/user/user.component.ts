import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  searchUserFocused = false;
  isAddUserMenuOpen = false;


  rowsPerPage = 10;
  currentPage = 1;

  users = [
    {
      name: 'Zsazsa McCleverty',
      role: 'Maintainer',
      plan: 'Enterprise',
      billing: 'Auto Debit',
      status: 'Active',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Yoko Pottie',
      role: 'Subscriber',
      plan: 'Basic',
      billing: 'Auto Debit',
      status: 'Inactive',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Wesley Burland',
      role: 'Editor',
      plan: 'Team',
      billing: 'Auto Debit',
      status: 'Inactive',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Vladamir Koschek',
      role: 'Author',
      plan: 'Team',
      billing: 'Manual - Paypal',
      status: 'Active',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Tyne Widmore',
      role: 'Subscriber',
      plan: 'Team',
      billing: 'Manual - Cash',
      status: 'Pending',
      avatar: 'https://via.placeholder.com/40',
    },{
      name: 'Zsazsa McCleverty',
      role: 'Maintainer',
      plan: 'Enterprise',
      billing: 'Auto Debit',
      status: 'Active',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Yoko Pottie',
      role: 'Subscriber',
      plan: 'Basic',
      billing: 'Auto Debit',
      status: 'Inactive',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Wesley Burland',
      role: 'Editor',
      plan: 'Team',
      billing: 'Auto Debit',
      status: 'Inactive',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Vladamir Koschek',
      role: 'Author',
      plan: 'Team',
      billing: 'Manual - Paypal',
      status: 'Active',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Tyne Widmore',
      role: 'Subscriber',
      plan: 'Team',
      billing: 'Manual - Cash',
      status: 'Pending',
      avatar: 'https://via.placeholder.com/40',
    },  
    {
      name: 'Zsazsa McCleverty',
      role: 'Maintainer',
      plan: 'Enterprise',
      billing: 'Auto Debit',
      status: 'Active',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Yoko Pottie',
      role: 'Subscriber',
      plan: 'Basic',
      billing: 'Auto Debit',
      status: 'Inactive',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Wesley Burland',
      role: 'Editor',
      plan: 'Team',
      billing: 'Auto Debit',
      status: 'Inactive',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Vladamir Koschek',
      role: 'Author',
      plan: 'Team',
      billing: 'Manual - Paypal',
      status: 'Active',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      name: 'Tyne Widmore',
      role: 'Subscriber',
      plan: 'Team',
      billing: 'Manual - Cash',
      status: 'Pending',
      avatar: 'https://via.placeholder.com/40',
    }
  ];

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  totalPages() {
    return Math.ceil(this.users.length / this.rowsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onRowsPerPageChange(event: any) {
    this.rowsPerPage = +event.target.value;
    this.currentPage = 1; // Reset to first page on rows per page change
  }

  openAddUser() {
    this.isAddUserMenuOpen = true;
  }

  closeAddUser() {
    this.isAddUserMenuOpen = false;
  }

}
