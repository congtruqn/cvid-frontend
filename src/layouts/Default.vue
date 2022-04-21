<template>
    <div>
      <header>
          <AdminHeader />
      </header>
      <div>
          <router-view />
      </div>
    </div>
    
</template>
<script>
import AdminHeader from '@/components/partials/AdminHeader'

  export default {
    name: 'defaultLayout',
    components: {
        AdminHeader,
    }
  }
</script>