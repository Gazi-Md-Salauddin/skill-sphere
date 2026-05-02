"use client"
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';


const SearchField = () => {
  
  const [search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    
    const handleSearch =() =>{
        const params = new URLSearchParams(searchParams);

        if(search){
            params.set("search",search)
        }else{
            params.delete("search")
        }
        router.push(`${pathName}?${params.toString()}`)
        
    };
  
  return (
    <div>
      
    </div>
  )
}

export default SearchField