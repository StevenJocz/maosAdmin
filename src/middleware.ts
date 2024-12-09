import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from "jwt-decode";

export function middleware(request: NextRequest) {
   const cookie = request.cookies.get('token')?.value;

   if (cookie) {
      try {
         // Decodificar el token
         const decodedToken: any = jwtDecode(cookie);
         const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos

         // Verificar si el token está expirado
         if (decodedToken.exp < currentTime) {
            return NextResponse.redirect(new URL('/', request.url)); // Token expirado, redirigir
         }

         const userType = decodedToken.tipoUsuario;
         console.log(userType);

         // Verificar acceso a rutas específicas
         if (request.nextUrl.pathname  === '/dashboard/admin') {
            if (userType !== '1') {
               // Si no tiene permisos, redirigir al inicio
               return NextResponse.redirect(new URL('/dashboard', request.url));
            }
         }

         // Si el token es válido y el usuario intenta acceder a '/', redirigir al dashboard
         if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(new URL('/dashboard', request.url));
         }

         // Si el token es válido, permitir el acceso
         return NextResponse.next();
      } catch (error) {
         // Si la decodificación falla (token no válido), redirigir
         return NextResponse.redirect(new URL('/', request.url));
      }
   } else {
      // Si no hay token, redirigir al inicio
      if (request.nextUrl.pathname !== '/') {
         return NextResponse.redirect(new URL('/', request.url));
      }
   }

   // Continuar el flujo normal
   return NextResponse.next();
}

export const config = {
   matcher: ['/', '/dashboard:path*', '/dashboard/admin'], // Aplicar al inicio y al dashboard
};
